import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css'; // Import the CSS file

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/send_feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: feedbackMessage }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Feedback sent successfully!');
      setFeedbackMessage('');
    } else {
      alert('Failed to send feedback.');
    }
  };

  return (
    <div name='Contact' className='flex flex-col justify-between min-h-screen p-6 bg-gradient-to-r from-blue-800 to-violet-900'>
      <div className='flex flex-col justify-center items-center flex-grow'>
        <div className='w-full max-w-md mb-6 '>
          <form className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-bold mb-4 text-center'>Schedule Your Consultation</h3>
            <p className='mb-4 text-center'>Select an appointment</p>
            <DatePicker
              className='w-full p-2 border rounded'
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              minDate={new Date()}
              placeholderText={'Select a day'}
            />
            <button className='w-96 mt-4 contact-button text-white rounded'>Schedule Your Consultation</button>
          </form>
        </div>

        <div className='w-full max-w-xl mt-10'>
          <form className='bg-white p-6 rounded-lg shadow-md' onSubmit={handleFeedbackSubmit}>
            <h3 className='text-lg font-bold mb-4 text-center'>Send Us Your Feedback</h3>
            <textarea
              className='w-full p-2 border rounded mb-4'
              placeholder='Your feedback'
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              required
            />
            <button className='w-full mt-3 contact-button text-white rounded'>Send Feedback</button>
          </form>
        </div>
      </div>
      <div className='text-center pb-6'>
        <h1 className='text-2xl font-bold text-white'>MedGenie.ai</h1>
        <p className='text-white'>
          © 2024 MedGenie.ai. All rights reserved. Designed and developed with care by Alex, Maria, Sana & Siddhant.
        </p>
      </div>
    </div>
  );
};

export default Contact;
