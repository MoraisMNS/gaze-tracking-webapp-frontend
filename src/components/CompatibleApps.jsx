import React from 'react';
import './CompatibleApps.css';

const CompatibleApps = () => {
  return (
    <div className="apps-main-container">
      <div className="apps-content-wrapper">
        <div className="apps-left-section">
          <h1 className="apps-main-title">Powerful eye-tracking automation.</h1>
          <p className="apps-subtitle">
            EyeTracker drives precision, insights, and efficiency in gaze analysis,
            attention monitoring, accessibility, and interaction patterns,
            ultimately saving time and enhancing user experience accuracy.
          </p>

          <div className="apps-feature-cards">
            <div className="apps-feature-card">
              <div className="apps-icon-wrapper">
                <svg className="apps-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <div className="apps-feature-content">
                <h3 className="apps-feature-title">Calibration and setup.</h3>
                <p className="apps-feature-description">with Quick Integration.</p>
              </div>
            </div>

            <div className="apps-feature-card">
              <div className="apps-icon-wrapper">
                <svg className="apps-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="apps-feature-content">
                <h3 className="apps-feature-title">Gaze tracking.</h3>
                <p className="apps-feature-description">with Real-time Analysis.</p>
              </div>
            </div>

            <div className="apps-feature-card">
              <div className="apps-icon-wrapper">
                <svg className="apps-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="apps-feature-content">
                <h3 className="apps-feature-title">Attention monitoring.</h3>
                <p className="apps-feature-description">with Automated Alerts.</p>
              </div>
            </div>

            <div className="apps-feature-card">
              <div className="apps-icon-wrapper">
                <svg className="apps-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div className="apps-feature-content">
                <h3 className="apps-feature-title">Data and analytics tools.</h3>
                <p className="apps-feature-description">with Dynamic Visualization.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="apps-right-section">
          <div className="apps-floating-icons">
            <div className="apps-icon-circle apps-icon-pos-1" style={{ backgroundColor: '#2196F3' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-2" style={{ backgroundColor: '#1976D2' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-3" style={{ backgroundColor: '#E53935' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-4" style={{ backgroundColor: '#64B5F6' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-5" style={{ backgroundColor: '#FF9800' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-6" style={{ backgroundColor: '#66BB6A' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-7" style={{ backgroundColor: '#42A5F5' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            </div>
            
            <div className="apps-icon-circle apps-icon-pos-8" style={{ backgroundColor: '#5C6BC0' }}>
              <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
              </svg>
            </div>

            <div className="apps-icon-circle apps-icon-circle-gray apps-icon-pos-9"></div>
            <div className="apps-icon-circle apps-icon-circle-gray apps-icon-pos-10"></div>
            <div className="apps-icon-circle apps-icon-circle-gray apps-icon-pos-11"></div>
            <div className="apps-icon-circle apps-icon-circle-gray apps-icon-pos-12"></div>
            <div className="apps-icon-circle apps-icon-circle-gray apps-icon-pos-13"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibleApps;