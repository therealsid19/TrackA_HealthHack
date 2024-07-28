import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroVid from '../assets/HeroVid.mp4';
import './style.css';

const Hero = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleDemoClick = () => {
    navigate('/user'); // Navigate to the user page
  };

  return (
    <div name='Home' className='hero-container'>
      <video className='hero-video' src={heroVid} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='content'>
        <h1>Best Medical Care</h1>
        <h2 className='subtitle'>We Provide High Solutions For Your Health</h2>
        <form className='form'>
          <button type='button' className='contact-button' onClick={handleDemoClick}>Demo</button> {/* Navigate directly to user page */}
        </form>
      </div>
    </div>
  );
};

export default Hero;
