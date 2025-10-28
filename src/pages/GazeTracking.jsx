import React from 'react';
import './GazeTracking.css';

const GazeTracking = () => {
  return (
    <div className="gazetrack-page-container">
      <section className="gazetrack-hero-section">
        <div className="gazetrack-hero-content">
          <h1 className="gazetrack-hero-title">
            Gaze Tracking Technology
          </h1>
          <p className="gazetrack-hero-subtitle">
            Boost Effective Decision-Making through Advanced Eye Movement Analysis and Real-Time Gaze Detection.
          </p>
        </div>
      </section>

      <section className="gazetrack-content-section">
        <div className="gazetrack-content-wrapper">
          <h2 className="gazetrack-section-title">What is Gaze Tracking?</h2>
          <p className="gazetrack-section-text">
            Gaze tracking is an advanced technology that monitors and analyzes where a person is looking 
            in real-time. Our system uses state-of-the-art algorithms to provide precise eye movement 
            data, enabling better understanding of user attention and interaction patterns.
          </p>

          <div className="gazetrack-features-grid">
            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">👁️</div>
              <h3 className="gazetrack-feature-title">Real-Time Tracking</h3>
              <p className="gazetrack-feature-description">
                Monitor eye movements in real-time with sub-degree accuracy for immediate insights.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">📊</div>
              <h3 className="gazetrack-feature-title">Data Analytics</h3>
              <p className="gazetrack-feature-description">
                Comprehensive analytics dashboard showing gaze patterns, fixation points, and more.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">🎯</div>
              <h3 className="gazetrack-feature-title">Precision Calibration</h3>
              <p className="gazetrack-feature-description">
                Advanced calibration system ensures accurate tracking across different users and environments.
              </p>
            </div>

            <div className="gazetrack-feature-card">
              <div className="gazetrack-feature-icon">🔄</div>
              <h3 className="gazetrack-feature-title">Seamless Integration</h3>
              <p className="gazetrack-feature-description">
                Easy integration with existing systems through our comprehensive API and SDK.
              </p>
            </div>
          </div>

          <div className="gazetrack-benefits-section">
            <h2 className="gazetrack-section-title">Key Benefits</h2>
            <div className="gazetrack-benefits-grid">
              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">01</div>
                <h4 className="gazetrack-benefit-title">Enhanced User Understanding</h4>
                <p className="gazetrack-benefit-text">
                  Gain deep insights into user behavior and attention patterns.
                </p>
              </div>

              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">02</div>
                <h4 className="gazetrack-benefit-title">Improved Accessibility</h4>
                <p className="gazetrack-benefit-text">
                  Enable hands-free interaction for users with mobility challenges.
                </p>
              </div>

              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">03</div>
                <h4 className="gazetrack-benefit-title">Research Applications</h4>
                <p className="gazetrack-benefit-text">
                  Perfect for UX research, marketing studies, and behavioral analysis.
                </p>
              </div>

              <div className="gazetrack-benefit-item">
                <div className="gazetrack-benefit-number">04</div>
                <h4 className="gazetrack-benefit-title">High Performance</h4>
                <p className="gazetrack-benefit-text">
                  Fast processing with minimal latency for smooth user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="gazetrack-cta-section">
            <h2 className="gazetrack-cta-title">Ready to Get Started?</h2>
            <p className="gazetrack-cta-text">
              Experience the power of advanced gaze tracking technology today.
            </p>
            <div className="gazetrack-cta-buttons">
              <button className="gazetrack-cta-btn gazetrack-cta-primary">
                Download Software
              </button>
              <button className="gazetrack-cta-btn gazetrack-cta-secondary">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GazeTracking;