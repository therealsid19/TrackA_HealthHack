import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <img src='https://via.placeholder.com/150' alt='Profile' className='profile-picture' />
      <h3 className='user-name'>John Doe</h3>
    </div>
  );
};

export default UserProfile;
