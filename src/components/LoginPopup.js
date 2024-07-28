import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ onClose, onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLoginSuccess(); // Close the popup
    navigate('/user'); // Navigate to the user page
  };

  return (
    <div className='login-popup-overlay'>
      <div className='login-popup'>
        <button className='login-popup-close' onClick={onClose}>×</button>
        <h2 className='login-heading'>Login</h2>
        <form className='login-form' onSubmit={handleLogin}>
          <input type='text' placeholder='Username' required />
          <input type='password' placeholder='Password' required />
          <button type='submit' className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
