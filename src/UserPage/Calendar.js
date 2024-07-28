import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import './UserPage.css'; // Ensure this file includes necessary styles

const MyCalendar = ({ onChange, value }) => {
  return (
    <div className='calendar-container'>
      <h2>Calendar</h2>
      <Calendar
        onChange={onChange}
        value={value}
      />
      <div className='selected-date'>
        <h3>Selected Date:</h3>
        <p>{value.toDateString()}</p>
      </div>
    </div>
  );
};

export default MyCalendar;
