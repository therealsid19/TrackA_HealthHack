import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import './NavBar.css';

const Navbar = ({ onLoginClick }) => { // Receive the onLoginClick prop
  const [menu, setMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const menuToggle = () => {
    setMenu(!menu);
  };

  const navList = [
    { id: 1, page: 'Home' },
    { id: 2, page: 'About' },
    { id: 3, page: 'Testimonials' },
    { id: 4, page: 'Contact' },
  ];

  const [search, setSearch] = useState('');

  return (
    <div className='navbar-container'>
      <div>
        <h1 className={menu ? 'hidden' : 'logo'}>Beyond Care</h1>
      </div>


      <div className='navbar-actions'>
        <BsPerson
          size={20}
          className='icon'
          onClick={() => setShowLogin(true)} // Show the login popup
        />
        <div className='menu-toggle' onClick={menuToggle}>
          {!menu ? <HiOutlineMenuAlt4 size={20} className='icon' /> : <AiOutlineClose size={20} className='icon' />}
        </div>
      </div>

      <div className={menu ? 'menu-open' : 'menu-closed'}>
        <ul>
          <h1 className='logo'>Beyond Care</h1>
          {navList.map((item) => (
            <li key={item.id}>
              <Link to={item.page} smooth={true} duration={500}>{item.page}</Link>
            </li>
          ))}
          <div className='menu-buttons'>
            <button className='btn'>Search</button>
            <button className='btn' onClick={() => setShowLogin(true)}>Account</button> {/* Show login popup */}
          </div>
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
