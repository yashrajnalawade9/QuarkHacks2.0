import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatContainerRef = useRef(null);
  const [emotion, setEmotions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

  const sendMessage = async () => {
    try {
      // Add user message to conversation
      const newConversation = [...conversation, { author: 'user', message: userMessage }];
      setConversation(newConversation);

      // Send user message to backend with selected language
      const response = await axios.post('http://localhost:5000/chatbot', { message: userMessage, language: selectedLanguage });

      setEmotions(response.data.emotions);

      // Add bot response to conversation
      const updatedConversation = [...newConversation, { author: 'bot', message: response.data.bot_response }];
      setConversation(updatedConversation);

      // Clear user message input
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    // Auto-scroll to the latest message
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [conversation]);

  useEffect(() => {
    console.log(emotion);
  }, [emotion]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="max-w-lg mx-auto p-4">

      {/* Language Selection */}
      <div className="mb-4">
        <button onClick={() => handleLanguageChange('en')} className={`mr-2 ${selectedLanguage === 'en' ? 'font-bold' : ''}`}>English</button>
        <button onClick={() => handleLanguageChange('mr')} className={`mr-2 ${selectedLanguage === 'mr' ? 'font-bold' : ''}`}>मराठी</button>
        <button onClick={() => handleLanguageChange('bn')} className={selectedLanguage === 'bn' ? 'font-bold' : ''}>বাংলা</button>
      </div>

      <div className="border rounded-lg p-4 bg-gray-100 shadow-md">
        <div
          ref={chatContainerRef}
          className="h-80 overflow-y-auto mb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollbarColor: 'transparent transparent' }}
        >
          {conversation.map((message, index) => (
            <div key={index} className="mb-2">
              <p className={message.author === 'user' ? 'text-right' : 'text-left font-bold'}>
                {message.author === 'user' ? 'You:' : 'Bot:'}
              </p>
              <p className={message.author === 'user' ? 'text-right' : 'text-left'}>{message.message}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 py-2 px-3 rounded-full bg-gray-200 focus:outline-none"
            style={{ resize: 'none' }}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
