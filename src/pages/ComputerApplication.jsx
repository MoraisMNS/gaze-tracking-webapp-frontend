import React from 'react';
import './ComputerApplication.css';

const ComputerApplication = () => {
  return (
    <div className="app-page-container">
      {/* HERO SECTION */}
      <section className="app-hero-section">
        <div className="app-hero-content">
          <div className="app-hero-text">
            <h1 className="app-hero-title">Smart Computer Control</h1>
            <p className="app-hero-subtitle">
              Control your computer using just your eyes, blinks, and voice.
              Our integrated system combines gaze tracking, calibration, and voice interaction
              for a seamless, hands-free experience.
            </p>
            <button className="app-hero-btn">Try the Demo</button>
          </div>
          <div className="app-hero-visual">
            <div className="app-monitor">
              <div className="app-screen-glow"></div>
              <div className="app-screen-icons">
                💻 🎯 🧠
              </div>
            </div>
          </div>
        </div>
        <div className="app-curve-divider"></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="app-about-section">
        <h2 className="app-section-title">How the Computer Application Works</h2>
        <p className="app-section-text">
          The application integrates gaze direction, blink detection, and voice commands
          into one control framework. Using OpenCV, MediaPipe, and a trained CNN model,
          it detects your gaze in real time and triggers actions in desktop applications
          like PowerPoint, Zoom, and Media Player.
        </p>
      </section>

      {/* FEATURE GRID */}
      <section className="app-features-section">
        <div className="app-features-grid">
          <div className="app-feature-card">
            <h3>👁️ Real-Time Gaze Tracking</h3>
            <p>
              Uses CNN and facial landmarks to detect five gaze directions—left, right, up, down, and center—with precision.
            </p>
          </div>
          <div className="app-feature-card">
            <h3>✨ Blink Detection</h3>
            <p>
              Eye Aspect Ratio (EAR) logic identifies intentional blinks to perform key actions
              such as opening files or confirming selections.
            </p>
          </div>
          <div className="app-feature-card">
            <h3>🗣️ Voice Integration</h3>
            <p>
              Integrates with the Whisper model for natural language control—
              allowing users to type messages or open apps by speaking.
            </p>
          </div>
          <div className="app-feature-card">
            <h3>⚙️ Calibration System</h3>
            <p>
              Automatically adapts to each user by recording iris offsets and threshold values,
              ensuring consistent accuracy across screens and lighting.
            </p>
          </div>
        </div>
      </section>

      {/* APP CONTROL SECTION */}
      <section className="app-control-section">
        <div className="app-control-content">
          <h2>Supported Applications</h2>
          <p>
            Experience effortless control across multiple programs. The framework maps gaze and blink inputs
            to desktop actions—turning your eyes into the ultimate interface.
          </p>
          <div className="app-control-grid">
            <div className="app-control-card">📊 PowerPoint<br/>Slide Navigation & Control</div>
            <div className="app-control-card">🎬 Media Player<br/>Play, Pause & Navigate</div>
            <div className="app-control-card">💬 Zoom & WhatsApp<br/>Chat, Mute & Message</div>
            <div className="app-control-card">📁 File Explorer<br/>Browse & Open Files</div>
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="app-highlight-section">
        <div className="app-highlight-content">
          <h2>Hands-Free Interaction for Everyone</h2>
          <p>
            Designed with accessibility in mind, this application empowers users with limited mobility
            to engage with computers naturally. The combination of gaze and voice makes digital control
            faster, intuitive, and inclusive.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="app-cta-section">
        <h2 className="app-cta-title">Download the Desktop Application</h2>
        <p className="app-cta-text">
          Experience the full potential of gaze tracking and voice control. Get the Look Track Vision
          desktop software today.
        </p>
        <div className="app-cta-buttons">
          <button className="app-cta-btn app-cta-primary">Download Now</button>
          <button className="app-cta-btn app-cta-secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default ComputerApplication;
