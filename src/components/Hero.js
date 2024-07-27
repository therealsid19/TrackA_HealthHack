import React from 'react';
import heroVid from '../assets/HeroVid.mp4';
import './style.css';

const Hero = ({ onSignInClick }) => { // Receive the onSignInClick prop
  return (
    <div name='Home' className='hero-container'>
      <video className='hero-video' src={heroVid} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='content'>
        <h1>Best Medical Care</h1>
        <h2 className='subtitle'>We Provide High Solutions For Your Health</h2>
        <form className='form'>
          <button type='button' className='contact-button' onClick={onSignInClick}>Sign In</button> {/* Trigger login popup */}
        </form>
      </div>
    </div>
  );
};

export default Hero;
