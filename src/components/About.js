import React from 'react';
import doctorSmile from '../assets/doctorSmile.jpg';
import { FaUserMd, FaTruck, FaBed } from 'react-icons/fa';
import './style.css'; // Import the CSS file

const About = () => {
  return (
    <div name='About' className='about-container'>
      <div className='image-container'>
        <img className='doctor-image' src={doctorSmile} alt='Doctor Smile' />
      </div>

      <div className='info-container'>
        <h3 className='section-title'>About Us</h3>
        <h1 className='main-title'>Best Medical Care For Yourself and Your Family</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus esse alias iusto quibusdam architecto nostrum animi quos. Voluptate, veritatis.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus esse alias iusto quibusdam architecto nostrum animi quos. Voluptate, veritatis.
        </p>

        <div className='services-grid'>
          <div className='service-item'>
            <FaUserMd size={20} />
            <h3 className='service-title'>Qualified Doctors</h3>
          </div>
          <div className='service-item'>
            <FaBed size={20} />
            <h3 className='service-title'>Emergency Services</h3>
          </div>
          <div className='service-item'>
            <FaTruck size={20} />
            <h3 className='service-title'>Free Ambulance</h3>
          </div>
          <div className='service-item'>
            <FaUserMd size={20} />
            <h3 className='service-title'>Qualified Doctors</h3>
          </div>
          <div className='service-item'>
            <FaBed size={20} />
            <h3 className='service-title'>Emergency Services</h3>
          </div>
          <div className='service-item'>
            <FaTruck size={20} />
            <h3 className='service-title'>Free Ambulance</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
