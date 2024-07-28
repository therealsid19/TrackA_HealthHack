import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import LoginPopup from './LoginPopup'; // Import the LoginPopup component
import { motion, useViewportScroll, useTransform } from 'framer-motion'; // Import framer-motion hooks and components
import './style.css';

const Navbar = ({ onLoginClick }) => { // Receive the onLoginClick prop
  const [menu, setMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const { scrollY } = useViewportScroll(); // Get scroll position
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Transform opacity based on scroll position

  const menuToggle = () => {
    setMenu(!menu);
  };

  const navList = [
    { id: 1, page: 'Home' },
    { id: 2, page: 'About' },
    { id: 3, page: 'Contact' },
  ];

  return (
    <motion.div
      className='w-full fixed top-0 z-10 bg-gradient-to-r from-blue-800 to-violet-900 px-4'
      style={{ opacity }} // Apply the opacity transform
    >
      <div className='relative flex items-center justify-between h-16'>
        <div className='flex-shrink-0'>
          <h1 className='logo'>MedGenie.ai</h1>
        </div>
        <div className={`absolute left-1/2 transform -translate-x-1/2 ${menu ? 'hidden' : 'hidden md:block'}`}>
          <ul className='flex space-x-4'>
            {navList.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.page}
                  smooth={true}
                  duration={500}
                  className='text-white hover:text-purple-600 transition duration-300'
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center'>
          <BsPerson
            size={20}
            className='text-white cursor-pointer hover:text-purple-600 transition duration-300'
            onClick={() => setShowLogin(true)} // Show the login popup
          />
          <div className='ml-4 md:hidden'>
            <button onClick={menuToggle} className='text-white hover:text-purple-600 transition duration-300'>
              {!menu ? <HiOutlineMenuAlt4 size={20} /> : <AiOutlineClose size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menu && (
        <div className='md:hidden'>
          <ul className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navList.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.page}
                  smooth={true}
                  duration={500}
                  className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-500 transition duration-300'
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />} {/* Render the LoginPopup */}
    </motion.div>
  );
};

export default Navbar;
