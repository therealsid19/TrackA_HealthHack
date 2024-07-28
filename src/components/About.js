import React from 'react';
import doctorSmile from '../assets/doctorSmile.jpg';
import { FaUserMd, FaClinicMedical, FaTablets } from 'react-icons/fa';
import { FaBowlFood, FaHeartPulse } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";
import './style.css';

const About = () => {
  return (
    <div name='About' className='about-container w-full px-4 py-8'>
      <div className='image-container w-full mb-6'>
        <img className='doctor-image w-full max-w-sm mx-auto rounded-lg' src={doctorSmile} alt='Doctor Smile' />
      </div>

      <div className='info-container w-full max-w-4xl mx-auto'>
        <h3 className='section-title text-xl sm:text-2xl font-bold mb-3'>About Us</h3>
        <h1 className='main-title text-2xl sm:text-3xl font-bold mb-4'>Best Medical Care For You and Your Family</h1>
        <p className='description text-base sm:text-lg mb-6'>
          Welcome to our innovative health app, designed to empower patients and users by providing seamless access to essential health services. Our mission is to make healthcare more accessible and convenient, ensuring you have the tools and support needed to manage your health effectively.
          <br /><br />
          Our app has various features to assist you with your health needs:
        </p>

        <div className='services-grid grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {[
            { icon: <FaUserMd className="flex-shrink-0" />, title: "Qualified AI Doctors" },
            { icon: <FaBowlFood className="flex-shrink-0" />, title: "Dietary Advice" },
            { icon: <IoCalendarSharp className="flex-shrink-0" />, title: "Appointment Booking" },
            { icon: <FaClinicMedical className="flex-shrink-0" />, title: "Clinic Suggestions" },
            { icon: <FaTablets className="flex-shrink-0" />, title: "Medication Reminders" },
            { icon: <FaHeartPulse className="flex-shrink-0" />, title: "Pulse Checker (Soon!)" },
          ].map((item, index) => (
            <div key={index} className='service-item flex items-center justify-center bg-blue-500 text-white p-3 rounded'>
              {item.icon}
              <h3 className='service-title ml-2 text-sm sm:text-base'>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
