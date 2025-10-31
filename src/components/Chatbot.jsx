import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const messagesEndRef = useRef(null);
  
  const API_BASE_URL = 'http://localhost:5000/api'; 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !sessionId && !isInitializing) {
      initializeSession();
    }
  }, [isOpen]);

  const initializeSession = async () => {
    setIsInitializing(true);
    try {
      const response = await fetch(`${API_BASE_URL}/chat/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      
      if (data.success) {
        setSessionId(data.session_id);
        setMessages([
          {
            role: 'bot',
            content: 'Hello! I can answer questions about Look Track Vision and our gaze tracking system. How can I help you?',
            timestamp: new Date()
          }
        ]);
      } else {
        setMessages([
          {
            role: 'error',
            content: 'Failed to connect. Please try again later.',
            timestamp: new Date()
          }
        ]);
      }
    } catch (error) {
      console.error('Error initializing session:', error);
      setMessages([
        {
          role: 'error',
          content: 'Unable to connect to the chat service. Please check your connection.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsInitializing(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !sessionId) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message
    setMessages(prev => [...prev, {
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    }]);

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          question: userMessage
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessages(prev => [...prev, {
          role: 'bot',
          content: data.answer,
          sources: data.sources,
          timestamp: new Date()
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'error',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'error',
        content: 'Failed to send message. Please try again.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = async () => {
    if (sessionId) {
      try {
        await fetch(`${API_BASE_URL}/chat/end`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ session_id: sessionId })
        });
      } catch (error) {
        console.error('Error ending session:', error);
      }
    }
    setIsOpen(false);
    setMessages([]);
    setSessionId(null);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button className="chatbot-toggle-btn" onClick={toggleChat}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="white"/>
            <path d="M7 9H17V11H7V9ZM7 6H17V8H7V6ZM7 12H14V14H7V12Z" fill="white"/>
          </svg>
          <span className="chatbot-notification-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <div className="chatbot-avatar-icon">🤖</div>
              </div>
              <div className="chatbot-header-text">
                <h3 className="chatbot-header-title">Look Track Vision</h3>
                <p className="chatbot-header-subtitle">
                  {isInitializing ? 'Connecting...' : 'Online - Ready to help'}
                </p>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={closeChat}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message chatbot-message-${message.role}`}>
                {message.role === 'bot' && (
                  <div className="chatbot-message-avatar">🤖</div>
                )}
                <div className="chatbot-message-content">
                  <div className="chatbot-message-bubble">
                    {message.content}
                  </div>
                  <div className="chatbot-message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  {message.sources && message.sources.length > 0 && (
                    <div className="chatbot-message-sources">
                      <span className="chatbot-sources-label">📚 Sources: </span>
                      {message.sources.length} reference{message.sources.length > 1 ? 's' : ''} used
                    </div>
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="chatbot-message-avatar chatbot-message-avatar-user">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="white"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-message chatbot-message-bot">
                <div className="chatbot-message-avatar">🤖</div>
                <div className="chatbot-message-content">
                  <div className="chatbot-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading || !sessionId}
            />
            <button 
              className="chatbot-send-btn"
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim() || !sessionId}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L18 2L10 18L8 11L2 10Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Powered By */}
          <div className="chatbot-footer">
            <span className="chatbot-footer-text">Powered by AI</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;