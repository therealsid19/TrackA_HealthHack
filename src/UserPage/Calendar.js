import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import './UserPage.css'; // Ensure this file includes necessary styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className='calendar-container'>
      <h2>Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <div className='selected-date'>
        <h3>Selected Date:</h3>
        <p>{date.toDateString()}</p>
      </div>
    </div>
  );
};

export default MyCalendar;
