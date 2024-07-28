import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';
import '../UserPage.css';

const ChatBot = () => {
  const navigate = useNavigate();

  return (
    <div className="chatbot-icon" onClick={() => navigate('/chatbot')}>
      <FiMessageSquare size={30} />
    </div>
  );
};

export default ChatBot;
