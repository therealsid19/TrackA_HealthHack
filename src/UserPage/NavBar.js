import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ onLoginClick }) => {
  const [menu, setMenu] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Implement logout logic here if necessary (e.g., clearing user session)
    navigate('/');
  };

  return (
    <div className='navbar-container'>
      <div>
        <h1 className={menu ? 'hidden' : 'logo'}>MedGenie.ai</h1>
      </div>

      <div className='navbar-actions'>
        <BsPerson
          size={20}
          className='icon'
          onClick={() => setShowLogoutPopup(!showLogoutPopup)}
        />
        {showLogoutPopup && (
          <div className='logout-popup'>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        )}
      </div>

      <div className={menu ? 'menu-open' : 'menu-closed'}>
        <ul>
          <h1 className='logo'>MedGenie.ai</h1>
          <div className='menu-buttons'>
            <button className='btn'>Search</button>
            <button className='btn'>Account</button> {/* Show login popup */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
