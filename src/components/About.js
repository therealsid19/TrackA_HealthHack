import React from 'react';
import doctorSmile from '../assets/doctorSmile.jpg';
import { FaUserMd, FaTruck, FaBed, FaClinicMedical, FaTablets} from 'react-icons/fa';
import { FaBowlFood, FaHeartPulse } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";
import './style.css'; // Import the CSS file

const About = () => {
  return (
    <div name='About' className='about-container'>
      <div className='image-container'>
        <img className='doctor-image' src={doctorSmile} alt='Doctor Smile' />
      </div>

      <div className='info-container'>
        <h3 className='section-title'>About Us</h3>
        <h1 className='main-title'>Best Medical Care For You and Your Family</h1>
        <p className='description'>
        Welcome to our innovative health app, designed to empower patients and users by providing seamless access to essential health services. Our mission is to make healthcare more accessible and convenient, ensuring you have the tools and support needed to manage your health effectively.
          <br /><br />
          Our app has various features to assist you with your health needs:
        </p>

        <div className='services-grid'>
          <div className='service-item'>
            <FaUserMd size={20} />
            <h3 className='service-title'>Qualified AI Doctors</h3>
          </div>
          <div className='service-item'>
            <FaBowlFood size={20} />
            <h3 className='service-title'>Dietary Advice</h3>
          </div>
          <div className='service-item'>
            <IoCalendarSharp size={20} />
            <h3 className='service-title'>Appointment Booking</h3>
          </div>
          <div className='service-item'>
            <FaClinicMedical size={20} />
            <h3 className='service-title'>Clinic Suggestions</h3>
          </div>
          <div className='service-item'>
            <FaTablets size={20} />
            <h3 className='service-title'>Medication Reminders</h3>
          </div>
          <div className='service-item'>
            <FaHeartPulse size={20} />
            <h3 className='service-title'>Pulse Checker (Soon!)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
