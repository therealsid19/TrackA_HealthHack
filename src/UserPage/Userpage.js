import React, { useState } from 'react';
import NavBar from './NavBar';
import ChatBot from './Chatbot/ChatBot';
import Map from './Map';
import MyCalendar from './Calendar'; // Ensure MyCalendar.js is correctly imported
import MedicineSchedule from './MedicineSchedule'; // Ensure MedicineSchedule.js is correctly imported
import './UserPage.css';
import UserProfile from './UserProfile';

const UserPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='user-page'>
        <div className='nav'>
      <NavBar />
      </div>
      <div className='user-page-content'>
        <div className='pfp'>
        <UserProfile />
        </div>
        <div className='map-container'>
            <h1 className='clinic-title'> Nearest Clinic </h1>
          <Map />
        </div>
        <div className = 'reminder' style={{ display: 'flex', alignItems: 'center' }}>
          <MyCalendar onChange={setSelectedDate} value={selectedDate} /> <MedicineSchedule date={selectedDate} />
        </div>
        <div className='chatbot-container-1'>
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
