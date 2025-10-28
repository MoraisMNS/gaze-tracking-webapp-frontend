import React from 'react';
import './VoiceIntegration.css';

const VoiceIntegration = () => {
  return (
    <div className="voice-page-container">
      {/* Hero Section */}
      <section className="voice-hero-section">
        <div className="voice-hero-content">
          <div className="voice-hero-text">
            <h1 className="voice-hero-title">AI-Powered Voice Interaction</h1>
            <p className="voice-hero-subtitle">
              Experience a new era of hands-free control. 
              Our intelligent speech-to-text engine converts voice commands into instant computer actions.
            </p>
            <button className="voice-hero-btn">Start Talking</button>
          </div>
          <div className="voice-hero-visual">
            <div className="voice-mic-circle">
              <div className="voice-mic-icon">🎤</div>
              <div className="voice-wave"></div>
            </div>
          </div>
        </div>
        <div className="voice-curve-divider"></div>
      </section>

      {/* Core Description */}
      <section className="voice-about-section">
        <h2 className="voice-section-title">How Voice Integration Works</h2>
        <p className="voice-section-text">
          The voice integration module leverages OpenAI’s Whisper model to interpret human speech in real time.
          It seamlessly coordinates with gaze tracking, enabling users to open applications, type messages,
          or search the web—all through natural voice commands.
        </p>
      </section>

      {/* Features Section */}
      <section className="voice-features-section">
        <div className="voice-features-grid">
          <div className="voice-feature-card">
            <h3>🎧 Real-Time Listening</h3>
            <p>
              Captures and transcribes your speech instantly, maintaining smooth, low-latency interaction.
            </p>
          </div>
          <div className="voice-feature-card">
            <h3>🧠 Context-Aware AI</h3>
            <p>
              Adapts dynamically to accents, tone, and environmental noise for reliable understanding.
            </p>
          </div>
          <div className="voice-feature-card">
            <h3>🔗 Seamless Integration</h3>
            <p>
              Combines with gaze-based input to form a powerful multimodal interface for full accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Highlight Section */}
      <section className="voice-highlight-section">
        <div className="voice-highlight-content">
          <h2>Why It Matters</h2>
          <p>
            This module transforms accessibility by allowing users with mobility challenges
            to interact naturally with digital systems. Whether dictating messages, navigating interfaces,
            or activating applications—your voice becomes the ultimate control tool.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="voice-cta-section">
        <h2 className="voice-cta-title">Try the Voice Control Demo</h2>
        <p className="voice-cta-text">
          Speak, see, and control. Explore how real-time voice recognition reshapes human–computer interaction.
        </p>
        <div className="voice-cta-buttons">
          <button className="voice-cta-btn voice-cta-primary">Launch Demo</button>
          <button className="voice-cta-btn voice-cta-secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default VoiceIntegration;
