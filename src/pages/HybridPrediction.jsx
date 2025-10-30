import React from 'react';
import './HybridPrediction.css';

const HybridPrediction = () => {
  return (
    <div className="hybrid-page-container">
      {/* HERO SECTION */}
      <section className="hybrid-hero-section">
        <div className="hybrid-hero-content">
          <h1 className="hybrid-hero-title">Hybrid Prediction System</h1>
          <p className="hybrid-hero-subtitle">
            Combining deep learning with landmark-based calibration to achieve 
            precise, stable, and user-specific gaze detection.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="hybrid-about-section">
        <div className="hybrid-about-wrapper">
          <h2 className="hybrid-section-title">What is Hybrid Prediction?</h2>
          <p className="hybrid-section-text">
            The Hybrid Prediction System enhances gaze-tracking accuracy by merging 
            predictions from a <strong>CNN model</strong> with geometric offsets derived 
            from <strong>facial landmarks</strong>.  
            This approach reduces noise and compensates for user-specific variations 
            such as head tilt, screen distance, and lighting changes.
          </p>

          {/* FEATURE GRID */}
          <div className="hybrid-features-grid">
            <div className="hybrid-feature-card">
              <div className="hybrid-feature-icon">🧠</div>
              <h3 className="hybrid-feature-title">CNN-Based Gaze Classification</h3>
              <p className="hybrid-feature-description">
                The trained CNN model processes cropped eye images to classify 
                gaze directions — Left, Right, Up, Down, and Center — in real time.
              </p>
            </div>

            <div className="hybrid-feature-card">
              <div className="hybrid-feature-icon">📍</div>
              <h3 className="hybrid-feature-title">Landmark Offset Correction</h3>
              <p className="hybrid-feature-description">
                Iris and pupil landmarks are used to calculate positional offsets 
                that fine-tune CNN predictions for each individual user.
              </p>
            </div>

            <div className="hybrid-feature-card">
              <div className="hybrid-feature-icon">⚖️</div>
              <h3 className="hybrid-feature-title">Adaptive Weighting</h3>
              <p className="hybrid-feature-description">
                The system dynamically balances CNN confidence scores and 
                landmark-derived offsets to improve robustness and reliability.
              </p>
            </div>

            <div className="hybrid-feature-card">
              <div className="hybrid-feature-icon">🎯</div>
              <h3 className="hybrid-feature-title">Precision Validation</h3>
              <p className="hybrid-feature-description">
                Final gaze outputs are validated through attention heatmaps and 
                fixation consistency tests to ensure accurate predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUALIZATION SECTION */}
      <section className="hybrid-visual-section">
        <h2 className="hybrid-section-title">How the Hybrid Model Works</h2>
        <div className="hybrid-visual-grid">
          <div className="hybrid-visual-step">
            <h3>Step 1: CNN Prediction</h3>
            <p>
              The CNN processes the left and right eye images and predicts a gaze 
              direction based on trained visual features.
            </p>
          </div>

          <div className="hybrid-visual-step">
            <h3>Step 2: Landmark Offset Estimation</h3>
            <p>
              The calibration module calculates iris offsets and compares them 
              to baseline gaze vectors stored during calibration.
            </p>
          </div>

          <div className="hybrid-visual-step">
            <h3>Step 3: Hybrid Fusion</h3>
            <p>
              The CNN output and landmark-based offsets are combined using 
              a weighted average to refine gaze direction predictions.
            </p>
          </div>

          <div className="hybrid-visual-step">
            <h3>Step 4: Validation and Output</h3>
            <p>
              The final predicted direction is displayed and used to control 
              external applications with enhanced stability and precision.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="hybrid-highlight-section">
        <div className="hybrid-highlight-content">
          <h2>Accuracy Meets Adaptability</h2>
          <p>
            The hybrid model ensures that small variations in user posture, 
            lighting, or calibration data do not affect prediction quality.  
            By combining neural and geometric intelligence, Look Track Vision 
            achieves exceptional gaze-tracking accuracy.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="hybrid-cta-section">
        <h2 className="hybrid-cta-title">Explore the Hybrid Advantage</h2>
        <p className="hybrid-cta-text">
          Learn how combining machine learning and calibration-based logic 
          makes our gaze prediction both powerful and reliable.
        </p>
        <div className="hybrid-cta-buttons">
          <button className="hybrid-cta-btn hybrid-cta-primary">View Demo</button>
          <button className="hybrid-cta-btn hybrid-cta-secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default HybridPrediction;
