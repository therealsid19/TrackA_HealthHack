import React from 'react';
import NavBar from './NavBar'; // Make sure NavBar.js is in the same folder
import ChatBot from './ChatBot'; // Make sure ChatBot.js is in the same folder
import Map from './Map'; // Make sure Map.js is in the same folder
import Calendar from './Calendar'; // Make sure Calendar.js is in the same folder
import './UserPage.css'; // Import CSS

const UserPage = () => {
  return (
    <div className='user-page'>
      <NavBar />
      <div className='user-page-content'>
        <div className='map-container'>
          <Map />
        </div>
        <div className='calendar-container'>
          <Calendar />
        </div>
        <ChatBot />
      </div>
    </div>
  );
};

export default UserPage;
