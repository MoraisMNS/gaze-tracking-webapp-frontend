import React from 'react';
import './BlinkDetection.css';

const BlinkDetection = () => {
  return (
    <div className="blink-page-container">
      {/* HERO SECTION */}
      <section className="blink-hero-section">
        <div className="blink-hero-content">
          <h1 className="blink-hero-title">Blink Detection System</h1>
          <p className="blink-hero-subtitle">
            Experience intuitive and contact-free interaction.  
            Our system detects intentional blinks using eye landmark tracking and the Eye Aspect Ratio (EAR) method for effortless computer control.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="blink-about-section">
        <div className="blink-about-wrapper">
          <h2 className="blink-section-title">How Blink Detection Works</h2>
          <p className="blink-section-text">
            The blink detection module uses real-time facial landmark tracking and geometric analysis to identify 
            eye closures. By calculating the <strong>Eye Aspect Ratio (EAR)</strong> from specific eye landmarks, 
            our system determines whether a user’s eyes are open or closed.  
            Intentional blinks are interpreted as control commands for accessibility and hands-free interaction.
          </p>

          {/* FEATURES GRID */}
          <div className="blink-features-grid">
            <div className="blink-feature-card">
              <div className="blink-feature-icon">👁️</div>
              <h3 className="blink-feature-title">Eye Landmark Detection</h3>
              <p className="blink-feature-description">
                Detects 468 facial landmarks using MediaPipe, focusing on key eye points for accurate EAR calculation.
              </p>
            </div>

            <div className="blink-feature-card">
              <div className="blink-feature-icon">📏</div>
              <h3 className="blink-feature-title">Eye Aspect Ratio (EAR)</h3>
              <p className="blink-feature-description">
                Measures vertical and horizontal eye distances.  
                When the EAR value drops below a threshold, a blink is detected.
              </p>
            </div>

            <div className="blink-feature-card">
              <div className="blink-feature-icon">⚙️</div>
              <h3 className="blink-feature-title">Threshold Calibration</h3>
              <p className="blink-feature-description">
                The system adapts EAR thresholds for each user to differentiate natural blinks from intentional ones.
              </p>
            </div>

            <div className="blink-feature-card">
              <div className="blink-feature-icon">🧠</div>
              <h3 className="blink-feature-title">Action Mapping</h3>
              <p className="blink-feature-description">
                Intentional blinks are mapped to specific actions such as selecting items, confirming inputs, or 
                activating gaze-based controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION USES */}
      <section className="blink-app-section">
        <h2 className="blink-section-title">Applications in Look Track Vision</h2>
        <div className="blink-app-grid">
          <div className="blink-app-card">
            <h3>💻 Computer Application Control</h3>
            <p>
              Use intentional blinks to trigger actions such as starting slides, pausing media, or confirming gaze selections.
            </p>
          </div>
          <div className="blink-app-card">
            <h3>🧩 Hybrid Gaze Interaction</h3>
            <p>
              Combines gaze direction and blink detection for precise, multimodal control across desktop environments.
            </p>
          </div>
          <div className="blink-app-card">
            <h3>🧑‍🦽 Accessibility Enhancement</h3>
            <p>
              Designed to assist users with limited mobility, offering full control through simple, natural eye movements.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="blink-highlight-section">
        <div className="blink-highlight-content">
          <h2>Precision and Reliability</h2>
          <p>
            The system achieves high accuracy through landmark-based tracking, adaptive calibration, and real-time EAR monitoring.  
            Blink duration and frequency are analyzed to ensure consistent, intentional recognition under different lighting and face orientations.
          </p>
        </div>
      </section>

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
  );
};

export default BlinkDetection;
