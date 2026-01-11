import React from 'react';
import './EyeTrackingShowCase.css';
import EyeTrackingShowCaseImage from "../assets/eye-tracking-show-case.png";

const EyeTrackingShowcase = () => {
  return (
    <section className="eyetrack-showcase">
      <div className="eyetrack-layout">
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
                <span className="stats-value">95%</span>
                <div className="stats-bar">
                  <div className="stats-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eyetrack-info">
          <h2 className="eyetrack-main-title">
           Enable accurate hands-free interaction through{' '}
            <span className="title-highlight">intelligent gaze tracking!</span>
          </h2>

          <p className="eyetrack-subtitle">
            Advanced eye tracking systems deliver increased precision and insights.
          </p>

          <div className="eyetrack-separator"></div>

          <div className="eyetrack-description">
            <p className="description-text">
             Advanced gaze-based interaction systems can significantly improve accessibility and user independence by enabling precise, real-time computer control without physical input devices.
            </p>

            <p className="description-text">
             Drive meaningful accessibility improvements through a multimodal Human–Computer Interaction system designed for hands-free control. By integrating gaze tracking, blink detection, and voice interaction, the system enables intuitive navigation and control for users with limited motor impairments.
            </p>

            <p className="description-text">
              Real-time gaze detection and feedback are essential for stable and intentional interaction. LOOK TRACK VISION ensures reliable performance through calibration, head-pose validation, and continuous gaze monitoring, forming a practical foundation for accurate, accessible, and inclusive computer interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyeTrackingShowcase;