import React from 'react';
import './UserProfile.css';
import pfp from '../assets/John-pic.png'

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <img src={pfp} alt='Profile' className='profile-picture' />
      <h3 className='user-name'>John Doe</h3>
    </div>
  );
};

export default UserProfile;
