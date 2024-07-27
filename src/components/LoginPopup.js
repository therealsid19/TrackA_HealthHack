import React, { useState } from 'react';
import './style.css'; // Ensure styles are included

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with', email, password);
    onClose(); // Close the popup after login
  };

  return (
    <div className='login-popup-overlay'>
      <div className='login-popup'>
        <button className='login-popup-close' onClick={onClose}>✖</button>
        <h2 className='login-heading'>Login</h2> 
        <form className='login-form'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='button' className='login-button' onClick={handleLogin}>Login</button>
        </form>
        <div className='login-social'>
          <button className='google-button'>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
