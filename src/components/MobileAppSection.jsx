import React from 'react';
import './MobileAppSection.css';

const MobileAppSection = () => {
  return (
    <div className="mobileapp-main-container">
      <div className="mobileapp-content-wrapper">
        <div className="mobileapp-grid">
          {/* Left Section - Phone Mockup */}
          <div className="mobileapp-phone-section">
            <div className="mobileapp-phone-mockup">
              <div className="mobileapp-phone-notch"></div>
              <div className="mobileapp-phone-screen">
                {/* Header */}
                <div className="mobileapp-screen-header">
                  <div className="mobileapp-dropdown">
                    <span className="mobileapp-dropdown-icon">👥</span>
                    <span className="mobileapp-dropdown-text">All Employees (28)</span>
                    <span className="mobileapp-dropdown-arrow">▼</span>
                  </div>
                  <button className="mobileapp-search-btn">🔍</button>
                </div>

                {/* Employee List */}
                <div className="mobileapp-employee-list">
                  <div className="mobileapp-section-divider">B</div>
                  
                  <div className="mobileapp-employee-item">
                    <img src="https://via.placeholder.com/40" alt="Brielle Avi" className="mobileapp-employee-avatar" />
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Brielle Avi</h4>
                      <p className="mobileapp-employee-role">Accountant</p>
                    </div>
                    <span className="mobileapp-employee-badge">Sep 1-14</span>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>

                  <div className="mobileapp-employee-item">
                    <img src="https://via.placeholder.com/40" alt="Bennett Ivan" className="mobileapp-employee-avatar" />
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Bennett Ivan</h4>
                      <p className="mobileapp-employee-role">HR Administrator</p>
                    </div>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>

                  <div className="mobileapp-section-divider">C</div>
                  
                  <div className="mobileapp-employee-item">
                    <img src="https://via.placeholder.com/40" alt="Chantria Cary" className="mobileapp-employee-avatar" />
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Chantria Cary</h4>
                      <p className="mobileapp-employee-role">HR Administrator</p>
                    </div>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>

                  <div className="mobileapp-section-divider">D</div>
                  
                  <div className="mobileapp-employee-item">
                    <img src="https://via.placeholder.com/40" alt="Dionne Hugo" className="mobileapp-employee-avatar" />
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Dionne Hugo</h4>
                      <p className="mobileapp-employee-role">Account Executive</p>
                    </div>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>

                  <div className="mobileapp-employee-item">
                    <div className="mobileapp-employee-avatar-icon">R</div>
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Dalton John</h4>
                      <p className="mobileapp-employee-role">Director of IT</p>
                    </div>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>

                  <div className="mobileapp-section-divider">E</div>
                  
                  <div className="mobileapp-employee-item">
                    <img src="https://via.placeholder.com/40" alt="Erskine Lyle" className="mobileapp-employee-avatar" />
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Erskine Lyle</h4>
                      <p className="mobileapp-employee-role">Receptionist</p>
                    </div>
                    <span className="mobileapp-employee-badge">Sep 1-11</span>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>

                  <div className="mobileapp-employee-item">
                    <img src="https://via.placeholder.com/40" alt="Emery John" className="mobileapp-employee-avatar" />
                    <div className="mobileapp-employee-info">
                      <h4 className="mobileapp-employee-name">Emery John</h4>
                      <p className="mobileapp-employee-role">Sales Team Lead</p>
                    </div>
                    <span className="mobileapp-employee-badge">Sep 1-15</span>
                    <span className="mobileapp-employee-arrow">›</span>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mobileapp-bottom-nav">
                  <button className="mobileapp-nav-btn">🏠</button>
                  <button className="mobileapp-nav-btn">📊</button>
                  <button className="mobileapp-nav-btn mobileapp-nav-btn-active">👥</button>
                  <button className="mobileapp-nav-btn">☰</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="mobileapp-text-section">
            <h1 className="mobileapp-main-title">
              Empower Your Mobile Workforce with Cutting-edge HR Solutions.
            </h1>
            <p className="mobileapp-subtitle">
              Effortlessly Manage Time Off Requests with Our Mobile HR App - Simplify HR Management Anytime, Anywhere.
            </p>

            <div className="mobileapp-download-buttons">
              <a href="#google-play" className="mobileapp-download-btn">
                <svg className="mobileapp-store-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="mobileapp-store-text">
                  <span className="mobileapp-store-label">Download on the</span>
                  <span className="mobileapp-store-name">Google Play</span>
                </div>
              </a>

              <a href="#app-store" className="mobileapp-download-btn">
                <svg className="mobileapp-store-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="mobileapp-store-text">
                  <span className="mobileapp-store-label">Download on the</span>
                  <span className="mobileapp-store-name">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;