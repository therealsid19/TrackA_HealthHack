import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroVid from '../assets/HeroVid.mp4';
import './style.css';

const Hero = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [email, setEmail] = useState(''); // Add state for email input

  const handleDemoClick = () => {
    navigate('/user'); // Navigate to the user page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted with email:", email); // Debugging statement

    try {
      const response = await fetch('/submit_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'email': email
        })
      });

      const data = await response.json();
      console.log("Response from server:", data); // Debugging statement

      if (response.ok) {
        setEmail(''); // Clear the email input field on success
        console.log("Email input field cleared"); // Debugging statement
      } else {
        console.error("Failed to submit email", data); // Handle server errors
      }
    } catch (error) {
      console.error('Error:', error); // Handle network or other errors
    }
  };

  return (
    <div name='Home' className='hero-container flex'>
      <video className='hero-video' src={heroVid} autoPlay loop muted />
      <div className='overlay'></div>
      <div className='content'>
        <h1>Best Medical Care</h1>
        <h2 className='subtitle'>We Provide High Solutions For Your Health</h2>
        <form className='form'>
          <button type='button' className='contact-button' onClick={handleDemoClick}>Demo</button> {/* Navigate directly to user page */}
        </form>
        <div className='pt-5'>  
          <div className="pt-3 subtitle">
            <p className='text-center'>To join our waitlist enter your email here</p>
          </div>
          <form id="waitlistForm" 
            className="py-4 p-6 rounded-lg shadow-lg"
            style={{ background: 'linear-gradient(90deg, rgba(29, 78, 216, 0.5) 0%, rgba(139, 92, 246, 0.5) 100%)' }}
            onSubmit={handleSubmit}>
            <label htmlFor="email" className="pr-3 text-neutral-200">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-neutral-800 pl-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email} // Set the input value to the state variable
              onChange={(e) => setEmail(e.target.value)} // Update the state variable on input change
              required
            />
            <button type="submit" className="contact-button pl-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
