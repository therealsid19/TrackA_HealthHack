import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UserPage from './UserPage/Userpage'; // Ensure the import path is correct
import ChatBotPage from './UserPage/Chatbot/ChatBotPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Contact />
            </>
          } />
          <Route path="/user" element={<UserPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
