from flask import Flask, request, jsonify, render_template
import openai
import logging

app = Flask(__name__)

openai.api_key = 'sk-proj-CGOwUVqUqwcO9KcpJnjET3BlbkFJxa07Ml5Sc79oLmJ0Nqjc'

# Set up logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()
    user_message = data.get('message', '')

    # Mock responses for specific features
    mock_responses = {
        "Schedule an Appointment": "Sure, I can help you schedule an appointment. Please provide the details.",
        "Suggest a diet plan": "Please suggest any requirements and restrictions you may have",
        "Check your symptom": "Please describe your symptoms, and I will help you understand them better."
    }

    # Check if the user message matches one of the mock responses
    if user_message in mock_responses:
        reply = mock_responses[user_message]
    else:
        try:
            response = openai.Completion.create(
                engine="gpt-3.5-turbo",
                prompt=f"You are a helpful healthcare assistant. {user_message}",
                max_tokens=150,
                n=1,
                stop=None,
                temperature=0.7
            )

            logging.debug(f"OpenAI API response: {response}")

            reply = response.choices[0].text.strip()
        except Exception as e:
            logging.error(f"Error communicating with OpenAI API: {e}")
            reply = 'Sorry, something went wrong. Please try again.'

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
