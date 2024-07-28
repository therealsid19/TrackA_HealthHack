import React from 'react';
import './UserPage.css'; // Ensure this file includes necessary styles

const MedicineSchedule = ({ date }) => {
  const medicines = [
    { time: '08:00 AM', name: 'Aspirin' },
    { time: '12:00 PM', name: 'Metformin' },
    { time: '06:00 PM', name: 'Lisinopril' },
    { time: '09:00 PM', name: 'Atorvastatin' },
  ];

  return (
    <div className='medicine-schedule-container'>
      <h2 className='meds-title'>Medicine Schedule for {date.toDateString()}</h2>
      <table className='medicine-schedule-table'>
        <thead>
          <tr>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.time}</td>
              <td>{medicine.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineSchedule;
