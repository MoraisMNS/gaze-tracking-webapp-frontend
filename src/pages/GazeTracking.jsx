import React from 'react';
import './GazeTracking.css';

const GazeTracking = () => {
  return (
    <div className="gazetrack-page-container">
      {/* HERO SECTION */}
      <section className="gazetrack-hero-section">
        <div className="gazetrack-hero-content">
          <h1 className="gazetrack-hero-title">
            Intelligent Gaze Tracking System
          </h1>
          <p className="gazetrack-hero-subtitle">
            Experience hands-free computer interaction through advanced eye and gaze detection.
            Our system integrates deep learning, blink recognition, and voice control for complete accessibility.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="gazetrack-content-section">
        <div className="gazetrack-content-wrapper">
          <h2 className="gazetrack-section-title">What is Gaze Tracking?</h2>
          <p className="gazetrack-section-text">
            Gaze tracking monitors where a user is looking and interprets eye movements as input commands.
            Our system uses CNN-based gaze direction detection, blink recognition, and calibration offsets
            to allow seamless, real-time computer control without physical input devices.
          </p>

          {/* FEATURE GRID */}
          <div className="gazetrack-features-grid">
            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">👁️</div>
              <h3 className="gazetrack-feature-title">Gaze Direction Detection</h3>
              <p className="gazetrack-feature-description">
                Detects real-time gaze directions—left, right, up, down, and center—using CNN and MediaPipe facial landmarks.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">✨</div>
              <h3 className="gazetrack-feature-title">Blink Detection</h3>
              <p className="gazetrack-feature-description">
                Identifies intentional blinks via Eye Aspect Ratio (EAR) to trigger selection or confirmation actions.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">🎯</div>
              <h3 className="gazetrack-feature-title">Calibration System</h3>
              <p className="gazetrack-feature-description">
                Personalized calibration captures iris offsets and thresholds to improve tracking precision for each user.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">🧠</div>
              <h3 className="gazetrack-feature-title">Hybrid Prediction</h3>
              <p className="gazetrack-feature-description">
                Combines CNN predictions with iris landmark offsets for enhanced accuracy and robust gaze classification.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">🔥</div>
              <h3 className="gazetrack-feature-title">Attention Heatmap</h3>
              <p className="gazetrack-feature-description">
                Visualizes focus intensity across screen regions, indicating user attention patterns in real-time.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">🗣️</div>
              <h3 className="gazetrack-feature-title">Voice Integration</h3>
              <p className="gazetrack-feature-description">
                Integrates OpenAI Whisper for speech-to-text commands, enabling voice-based control of applications.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">💻</div>
              <h3 className="gazetrack-feature-title">Application Control</h3>
              <p className="gazetrack-feature-description">
                Supports control over applications like PowerPoint, Zoom, and Media Player using gaze and blink actions.
              </p>
            </div>
          </div>

          {/* BENEFITS SECTION */}
          <div className="gazetrack-benefits-section">
            <h2 className="gazetrack-section-title">Why It Matters</h2>
            <div className="gazetrack-benefits-grid">
              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">01</div>
                <h4 className="gazetrack-benefit-title">Accessibility for All</h4>
                <p className="gazetrack-benefit-text">
                  Empowers users with physical disabilities to operate computers independently through gaze and voice.
                </p>
              </div>

              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">02</div>
                <h4 className="gazetrack-benefit-title">Seamless Integration</h4>
                <p className="gazetrack-benefit-text">
                  Works with common desktop applications to provide a unified, intelligent interaction experience.
                </p>
              </div>

              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">03</div>
                <h4 className="gazetrack-benefit-title">High Accuracy</h4>
                <p className="gazetrack-benefit-text">
                  Uses deep learning and real-time calibration to achieve precise gaze and blink detection accuracy.
                </p>
              </div>

              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">04</div>
                <h4 className="gazetrack-benefit-title">Enhanced User Research</h4>
                <p className="gazetrack-benefit-text">
                  Attention heatmaps and gaze analytics support UX evaluation and behavioral research studies.
                </p>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="gazetrack-cta-section">
            <h2 className="gazetrack-cta-title">Experience Look Track Vision</h2>
            <p className="gazetrack-cta-text">
              Explore how gaze, blink, and voice can redefine human–computer interaction.
            </p>
            <div className="gazetrack-cta-buttons">
              <button className="gazetrack-cta-btn gazetrack-cta-primary">
                Download Desktop App
              </button>
              <button className="gazetrack-cta-btn gazetrack-cta-secondary">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GazeTracking;
