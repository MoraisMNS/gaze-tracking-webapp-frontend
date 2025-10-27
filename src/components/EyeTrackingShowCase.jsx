import React from 'react';
import './EyeTrackingShowcase.css';
import EyeTrackingShowCaseImage from "../assets/eye-tracking-show-case.png";

const EyeTrackingShowcase = () => {
  return (
    <section className="eyetrack-showcase">
      <div className="eyetrack-layout">
        
        {/* LEFT: Image with Badge */}
        <div className="eyetrack-visual-wrapper">
          <div className="eyetrack-image-box">
            <img
              src={EyeTrackingShowCaseImage}
              alt="Eye tracking analysis in action"
              className="eyetrack-photo"
            />
            <div className="accuracy-indicator">
              <div className="indicator-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <div className="indicator-stats">
                <span className="stats-value">100%</span>
                <div className="stats-bar">
                  <div className="stats-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="eyetrack-info">
          <h2 className="eyetrack-main-title">
            Boost research accuracy by prioritising{' '}
            <span className="title-highlight">precise gaze tracking!</span>
          </h2>

          <p className="eyetrack-subtitle">
            Advanced eye tracking systems deliver increased precision and insights.
          </p>

          <div className="eyetrack-separator"></div>

          <div className="eyetrack-description">
            <p className="description-text">
              It does not take much to understand user attention patterns. Our Eye Tracking System with AI-powered analytics allows you to gauge and enhance visual engagement in research, help sustain accurate data collection, boost study reliability, and improve overall analytical performance.
            </p>

            <p className="description-text">
              Drive success in your <strong>Research and UX Studies</strong> with specialized eye tracking technology that elevates the precision and insights of behavioral analysis.
            </p>

            <p className="description-text">
              Real-time gaze visualization for exceptional data quality is imperative for research validity while also serving as a foundation for fostering accurate conclusions committed to achieving greater understanding of visual attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyeTrackingShowcase;