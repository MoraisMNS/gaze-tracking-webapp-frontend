import React from 'react';
import './Benefits.css';
import BenefitImage from "../assets/benefits.png";

const Benefits = () => {
  return (
    <section className="benefits-showcase">
      <div className="benefits-wrapper">
        <div className="benefits-list">
          <div className="benefit-card">
            <div className="benefit-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div className="benefit-details">
              <h3>Simple</h3>
              <p>
                Upgrade your digital HR experience with our easy-to-use automation tools that manage your data while ensuring increased efficiency, facilitating the seamless execution of digital HR efforts.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="benefit-details">
              <h3>Fast</h3>
              <p>
                Save time, accelerate your hiring process, and find the ideal talent with RomeoHR's fast screening services—getting checks done in hours, not days.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="benefit-details">
              <h3>Accurate</h3>
              <p>
                Utilize data and evidence-supported Evidence-Based Practice (EBP) to ensure, through your system, that the information entered by employees is accurate, error-free, and exact.
              </p>
            </div>
          </div>
        </div>

        <div className="benefits-visual">
          <img src={BenefitImage} alt="HR Platform Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;