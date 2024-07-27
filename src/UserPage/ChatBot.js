import React, { useState } from 'react';
import './UserPage.css'; // Ensure this file includes necessary styles

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages([...messages, { text: input, fromUser: true }, { text: "Bot: How can I assist you today?", fromUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className='chatbot-container'>
      <div className='chatbot-header'>
        <h2>ChatBot</h2>
      </div>
      <div className='chatbot-messages'>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.fromUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className='chatbot-input'>
        <input 
          type='text' 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder='Type your message...'
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
