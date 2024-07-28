import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import './UserPage.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

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
    <>
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChatBot}>
          <FiMessageSquare size={30} />
        </div>
      )}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header" onClick={toggleChatBot}>
            ChatBot
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
      )}
    </>
  );
};

export default ChatBot;
