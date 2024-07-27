import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to user page on successful login
    navigate('/user');
  };

  return (
    <div className='login-popup-overlay'>
      <div className='login-popup'>
        <button className='login-popup-close' onClick={onClose}>×</button>
        <h2 className='login-heading'>Login</h2>
        <form className='login-form' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <input type='text' placeholder='Username' required />
          <input type='password' placeholder='Password' required />
          <button type='submit' className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
