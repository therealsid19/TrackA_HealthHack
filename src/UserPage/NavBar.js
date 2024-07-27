import React from 'react';
import { Link } from 'react-router-dom';
import './UserPage.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to='/user'>Dashboard</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
