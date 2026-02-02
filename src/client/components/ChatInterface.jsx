import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble.jsx';
import './ChatInterface.css';

export default function ChatInterface({ messages, isThinking, onSendMessage, messagesEndRef }) {
  const [userInput, setUserInput] = useState('');
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [userInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() && !isThinking) {
      onSendMessage(userInput);
      setUserInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-interface">
      {/* Header */}
      <div className="chat-header">
        <div className="header-title">
          <span className="icon">⚡</span>
          <h1>Gemini-Ops Builder Agent</h1>
        </div>
        <div className="status-indicator">
          <span className={`status-dot ${isThinking ? 'thinking' : 'ready'}`}></span>
          <span className="status-text">
            {isThinking ? 'Processing...' : 'Ready'}
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
            isLatest={index === messages.length - 1}
          />
        ))}
        
        {/* Thinking indicator */}
        {isThinking && (
          <div className="message-row assistant">
            <div className="avatar">
              <span>🤖</span>
            </div>
            <div className="bubble thinking">
              <div className="thinking-content">
                <span className="thinking-text">Analyzing request and executing...</span>
                <div className="thinking-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-area">
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-wrapper">
            <textarea
              ref={textareaRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe what you want to build or configure... (e.g., 'Create a table for tracking IT assets' or 'Add user John to the Admin group')"
              disabled={isThinking}
              rows={1}
            />
            <button 
              type="submit" 
              disabled={isThinking || !userInput.trim()}
              className="send-button"
            >
              {isThinking ? (
                <span className="loading">⏳</span>
              ) : (
                <span>➤</span>
              )}
            </button>
          </div>
        </form>
        
        <div className="input-footer">
          <span className="footer-text">
            Gemini-Ops can make mistakes. Please verify critical configuration changes.
          </span>
        </div>
      </div>
    </div>
  );
}