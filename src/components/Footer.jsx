import React, { useState } from 'react';
import './Footer.css';
import Chatbot from '../components/Chatbot'; 
const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <footer className="footer-main-container">
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          <div className="footer-about-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Look Track Vision</span>
            </div>
            <p className="footer-description">
              The Look Track Vision web application demonstrates a real-time eye-tracking and human–computer interaction system that allows 
              users to control computer applications through gaze direction, blinking, and voice commands.
              It connects the deep-learning gaze detection model and computer-vision modules described in the desktop version into a clean, interactive web interface. 
              Users can experience how the system tracks eye movements, calibrates gaze positions, and translates them into digital actions—offering a hands-free, 
              accessible control solution for everyone, including individuals with limited mobility.
            </p>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Company</h3>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#why" className="footer-link">Why Look Track Vision</a></li>
              <li><a href="#overview" className="footer-link">Overview</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Support</h3>
            <ul className="footer-links-list">
              <li><a href="#login" className="footer-link">Log In</a></li>
              <li><a href="#demo" className="footer-link">Get a Demo</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Legal</h3>
            <ul className="footer-links-list">
              <li><a href="#terms" className="footer-link">Terms of Use</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-column-title">Social</h3>
            <ul className="footer-links-list">
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 Look Track Vision. All Rights Reserved</p>
        </div>
      </div>
      <button
        className="footer-chat-button"
        aria-label="Chat with us"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      </button>
      {chatOpen && <Chatbot />} 
    </footer>
  );
};

export default Footer;
