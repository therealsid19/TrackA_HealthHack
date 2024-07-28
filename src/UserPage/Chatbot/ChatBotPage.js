import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatBotPage.css';

const ChatBotPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { user: true, text: input }]);
      setInput('');
      // Here you can add bot response logic
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: 'This is a bot response' },
      ]);
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <button className="back-button" onClick={() => navigate('/user')}>Back</button>
        <h1 className="chat-title">ChatBot</h1>
      </div>
      <div className="chatbot-content">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={input} 
            onChange={handleInputChange} 
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
