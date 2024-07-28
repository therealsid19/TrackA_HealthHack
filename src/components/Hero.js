import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroVid from '../assets/HeroVid.mp4';
import './style.css';

const Hero = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleDemoClick = () => {
    navigate('/user'); // Navigate to the user page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    console.log("Form submitted with email:", email); // Debugging statement

    fetch('/submit_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'email': email
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Response from server:", data); // Debugging statement
      // Handle success or display a message to the user
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error or display a message to the user
    });
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
        <div className="pt-3">
          <p>To join our waitlist enter your email here</p>
        </div>
        <form id="waitlistForm" className="py-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="pr-3 text-neutral-300">Email:</label>
          <input type="email" id="email" name="email" className="text-black" required />
          <button type="submit" className="pl-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
