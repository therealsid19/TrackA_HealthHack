import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import './style.css'; // Import the CSS file

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div name='Contact' className='contact-container'>
      <div className='contact-info'>
        <h1 className='contact-title'>Beyond Care</h1>
        <p className='contact-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis in laboriosam perferendis nulla nisi vitae distinctio non eum. Id ratione voluptatibus amet expedita temporibus nulla tenetur vel obcaecati iure.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis in laboriosam perferendis nulla nisi vitae distinctio non eum. Id ratione voluptatibus amet expedita temporibus nulla tenetur vel obcaecati iure.
        </p>

        <div className='follow-us'>
          <h6 className='follow-title'>Follow us</h6>
          <div className='social-icons'>
            <AiFillFacebook className='icon' />
            <AiFillInstagram className='icon' />
            <FaWhatsappSquare className='icon' />
          </div>
        </div>
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
