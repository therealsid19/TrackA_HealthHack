from flask import Flask, request, jsonify, send_from_directory
import os
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Border, Side
from openpyxl.styles import Alignment
from datetime import datetime
import logging

app = Flask(__name__, static_folder='build', static_url_path='')

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Define the path for the Excel file within the data directory
excel_file_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'data', 'emails.xlsx')

# Define border style
thin_border = Border(
    left=Side(style='thin'),
    right=Side(style='thin'),
    top=Side(style='thin'),
    bottom=Side(style='thin')
)

@app.route('/submit_email', methods=['POST'])
def submit_email():
    email = request.form['email']
    logging.debug(f"Received email: {email}")

    try:
        # Check if the Excel file exists; if not, create it with headers
        if not os.path.exists(excel_file_path):
            workbook = Workbook()  # ADDED
            sheet = workbook.active  # ADDED
            sheet.title = "Emails"  # ADDED
            # Set headers
            headers = ["Index", "Email", "Date & Time"]  # ADDED
            sheet.append(headers)  # ADDED
            # Apply border to headers
            for col_num in range(1, len(headers) + 1):  # ADDED
                cell = sheet.cell(row=1, column=col_num)  # ADDED
                cell.border = thin_border  # ADDED
                cell.alignment = Alignment(horizontal="center", vertical="center")  # ADDED
            workbook.save(excel_file_path)  # ADDED
            logging.debug("Created Excel file and wrote headers")  # ADDED

        # Load the workbook and select the active sheet
        workbook = load_workbook(excel_file_path)
        sheet = workbook.active

        # Find the first available row
        next_index = None
        for row in range(2, sheet.max_row + 2):
            if sheet.cell(row=row, column=1).value is None:
                next_index = row
                break

        if next_index is None:
            next_index = sheet.max_row + 1

        # Get the current date and time
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Prepare the data
        row_data = [next_index - 1, email, current_time]

        # Write the data to the first available row
        for col_num, value in enumerate(row_data, start=1):
            cell = sheet.cell(row=next_index, column=col_num)
            cell.value = value
            cell.border = thin_border
            cell.alignment = Alignment(horizontal="center", vertical="center")

        # Adjust column widths
        for col in sheet.columns:
            max_length = 0
            column = col[0].column_letter  # Get the column name
            for cell in col:
                try:
                    if len(str(cell.value)) > max_length:
                        max_length = len(cell.value)
                except:
                    pass
            adjusted_width = (max_length + 2)
            sheet.column_dimensions[column].width = adjusted_width

        workbook.save(excel_file_path)
        logging.debug("Appended email to Excel file with index and date-time")
    except Exception as e:
        logging.error(f"Error writing to Excel file: {e}", exc_info=True)
        return jsonify({'message': 'Failed to submit email'}), 500

    return jsonify({'message': 'Email submitted successfully'})

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    # Send any other paths to the static folder
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
