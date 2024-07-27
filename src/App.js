import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import LoginPopup from './components/LoginPopup'; // Import the LoginPopup component
import UserPage from './UserPage/Userpage'; // Import UserPage

function App() {
  const [showLogin, setShowLogin] = useState(false); // State for showing the login popup

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onLoginClick={handleLoginClick} />
        <Hero onSignInClick={handleLoginClick} />
        <About />
        <Testimonials />
        <Contact />
        {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />} {/* Render the LoginPopup */}

        <Routes>
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
