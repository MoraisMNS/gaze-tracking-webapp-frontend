import React from 'react';
import './CalibrationSystem.css';

const CalibrationSystem = () => {
  return (
    <div className="calib-page-container">
      {/* HERO SECTION */}
      <section className="calib-hero-section">
        <div className="calib-hero-content">
          <h1 className="calib-hero-title">Calibration System</h1>
          <p className="calib-hero-subtitle">
            Ensuring accurate gaze prediction for every user through personalized calibration 
            and iris landmark analysis.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="calib-about-section">
        <div className="calib-about-wrapper">
          <h2 className="calib-section-title">What is Calibration?</h2>
          <p className="calib-section-text">
            Calibration is a vital step in gaze tracking that fine-tunes the system to each user’s 
            unique eye characteristics, head position, and lighting environment.  
            The calibration module calculates <strong>threshold offsets</strong> using iris and pupil 
            landmarks to align gaze predictions with actual screen coordinates.
          </p>

          {/* FEATURE GRID */}
          <div className="calib-features-grid">
            <div className="calib-feature-card">
              <div className="calib-feature-icon">🎯</div>
              <h3 className="calib-feature-title">Iris Landmark Mapping</h3>
              <p className="calib-feature-description">
                Captures real-time iris and pupil positions using MediaPipe facial landmarks to 
                establish baseline gaze coordinates.
              </p>
            </div>

            <div className="calib-feature-card">
              <div className="calib-feature-icon">📏</div>
              <h3 className="calib-feature-title">Offset Calculation</h3>
              <p className="calib-feature-description">
                Computes horizontal and vertical offsets between predicted and actual gaze 
                points to refine accuracy.
              </p>
            </div>

            <div className="calib-feature-card">
              <div className="calib-feature-icon">⚙️</div>
              <h3 className="calib-feature-title">Threshold Configuration</h3>
              <p className="calib-feature-description">
                Determines personalized threshold values (Left, Right, Up, Down) to adjust the 
                CNN-based gaze direction predictions.
              </p>
            </div>

            <div className="calib-feature-card">
              <div className="calib-feature-icon">💾</div>
              <h3 className="calib-feature-title">JSON Data Storage</h3>
              <p className="calib-feature-description">
                Saves user calibration data in a JSON file, ensuring consistent gaze prediction 
                accuracy across sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUALIZATION SECTION */}
      <section className="calib-visual-section">
        <h2 className="calib-section-title">How Calibration Works</h2>
        <div className="calib-visual-grid">
          <div className="calib-visual-step">
            <h3>Step 1: Eye Tracking Initialization</h3>
            <p>
              The system begins by detecting key facial landmarks and tracking both eyes 
              using the user’s webcam.
            </p>
          </div>

          <div className="calib-visual-step">
            <h3>Step 2: Gaze Point Collection</h3>
            <p>
              Users look at specific screen targets while the system records iris coordinates 
              for each direction.
            </p>
          </div>

          <div className="calib-visual-step">
            <h3>Step 3: Offset Calculation</h3>
            <p>
              Offsets between predicted and observed positions are computed for each direction 
              (Left, Right, Up, Down, Center).
            </p>
          </div>

          <div className="calib-visual-step">
            <h3>Step 4: Threshold Storage</h3>
            <p>
              The resulting calibration data is stored in <code>user_calibration.json</code>, 
              enabling precise gaze detection for the individual user.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="calib-highlight-section">
        <div className="calib-highlight-content">
          <h2>Accuracy Through Personalization</h2>
          <p>
            Unlike static gaze systems, Look Track Vision’s calibration adapts dynamically 
            to each user.  
            This process ensures reliable gaze direction detection under varying lighting, 
            head tilt, and screen distance conditions.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="calib-cta-section">
        <h2 className="calib-cta-title">Discover the Power of Calibration</h2>
        <p className="calib-cta-text">
          Calibration is the key to precision in gaze tracking.  
          Explore how user-specific tuning enhances accuracy in real-time applications.
        </p>
        <div className="calib-cta-buttons">
          <button className="calib-cta-btn calib-cta-primary">View Demo</button>
          <button className="calib-cta-btn calib-cta-secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default CalibrationSystem;
