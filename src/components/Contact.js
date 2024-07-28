import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import './style.css'; // Import the CSS file

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div name='Contact' className='contact-container'>
      <div className='contact-info'>
        <h1 className='contact-title'>MedGenie.ai</h1>
        <p className='contact-description'>
        © 2024 MedGenie.ai. All rights reserved. Designed and developed with care by Alex, Maria, Sana & Siddhant. 
        </p>
      </div>

      <div className='contact-form'>
        <form>
          <h3 className='form-title'>Schedule Your Consultation</h3>
          <p className='form-description'>Select an appointment</p>
          <DatePicker
            className='date-picker'
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            minDate={new Date()}
            placeholderText={'Select a day'}
          />
          <button className='schedule-button'>Schedule Your Consultation</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
