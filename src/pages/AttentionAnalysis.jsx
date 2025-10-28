import React from 'react';
import './AttentionAnalysis.css';

const AttentionAnalysis = () => {
  return (
    <div className="attention-page-container">
      <section className="attention-hero-section">
        <div className="attention-hero-content">
          <h1 className="attention-hero-title">
            Attention Analysis
          </h1>
          <p className="attention-hero-subtitle">
            Unlock Deep Insights into User Focus Patterns with AI-Powered Attention Analytics and Visual Engagement Metrics.
          </p>
        </div>
      </section>

      <section className="attention-content-section">
        <div className="attention-content-wrapper">
          <h2 className="attention-section-title">What is Attention Analysis?</h2>
          <p className="attention-section-text">
            Attention analysis transforms raw eye-tracking data into actionable insights about user 
            focus, engagement, and cognitive load. Our advanced algorithms identify attention patterns, 
            measure visual interest, and provide detailed metrics for optimizing user experiences.
          </p>

          <div className="attention-features-grid">
            <div className="attention-feature-card">
              <div className="attention-feature-icon">🔥</div>
              <h3 className="attention-feature-title">Heatmap Generation</h3>
              <p className="attention-feature-description">
                Visualize attention distribution with detailed heatmaps showing high and low engagement zones.
              </p>
            </div>

            <div className="attention-feature-card">
              <div className="attention-feature-icon">⏱️</div>
              <h3 className="attention-feature-title">Fixation Duration</h3>
              <p className="attention-feature-description">
                Measure how long users focus on specific elements to understand content effectiveness.
              </p>
            </div>

            <div className="attention-feature-card">
              <div className="attention-feature-icon">📍</div>
              <h3 className="attention-feature-title">Areas of Interest</h3>
              <p className="attention-feature-description">
                Define and track specific regions to analyze targeted attention and engagement metrics.
              </p>
            </div>

            <div className="attention-feature-card">
              <div className="attention-feature-icon">🧠</div>
              <h3 className="attention-feature-title">Cognitive Load</h3>
              <p className="attention-feature-description">
                Assess mental effort through pupil dilation and fixation patterns for UX optimization.
              </p>
            </div>
          </div>

          <div className="attention-metrics-section">
            <h2 className="attention-section-title">Key Metrics We Track</h2>
            <div className="attention-metrics-grid">
              <div className="attention-metric-card">
                <div className="attention-metric-icon-wrapper">
                  <div className="attention-metric-icon">👁️</div>
                </div>
                <h4 className="attention-metric-title">Time to First Fixation</h4>
                <p className="attention-metric-text">
                  Measures how quickly users notice important elements on your interface.
                </p>
              </div>

              <div className="attention-metric-card">
                <div className="attention-metric-icon-wrapper">
                  <div className="attention-metric-icon">⚡</div>
                </div>
                <h4 className="attention-metric-title">Fixation Count</h4>
                <p className="attention-metric-text">
                  Tracks the number of times users look at specific areas or elements.
                </p>
              </div>

              <div className="attention-metric-card">
                <div className="attention-metric-icon-wrapper">
                  <div className="attention-metric-icon">🎯</div>
                </div>
                <h4 className="attention-metric-title">Visit Duration</h4>
                <p className="attention-metric-text">
                  Records total time spent viewing each area of interest.
                </p>
              </div>

              <div className="attention-metric-card">
                <div className="attention-metric-icon-wrapper">
                  <div className="attention-metric-icon">🔄</div>
                </div>
                <h4 className="attention-metric-title">Revisit Rate</h4>
                <p className="attention-metric-text">
                  Identifies elements that draw repeated attention from users.
                </p>
              </div>

              <div className="attention-metric-card">
                <div className="attention-metric-icon-wrapper">
                  <div className="attention-metric-icon">📊</div>
                </div>
                <h4 className="attention-metric-title">Attention Distribution</h4>
                <p className="attention-metric-text">
                  Shows percentage of attention across different screen regions.
                </p>
              </div>

              <div className="attention-metric-card">
                <div className="attention-metric-icon-wrapper">
                  <div className="attention-metric-icon">🔍</div>
                </div>
                <h4 className="attention-metric-title">Scan Path Analysis</h4>
                <p className="attention-metric-text">
                  Reveals the sequential order of visual exploration patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="attention-benefits-section">
            <h2 className="attention-section-title">Applications & Use Cases</h2>
            <div className="attention-benefits-grid">
              <div className="attention-benefit-item">
                <div className="attention-benefit-number">01</div>
                <h4 className="attention-benefit-title">UX/UI Design Testing</h4>
                <p className="attention-benefit-text">
                  Optimize interface layouts by understanding which elements capture and hold user attention.
                </p>
              </div>

              <div className="attention-benefit-item">
                <div className="attention-benefit-number">02</div>
                <h4 className="attention-benefit-title">Marketing & Advertising</h4>
                <p className="attention-benefit-text">
                  Test ad placements and creative designs to maximize visual impact and engagement.
                </p>
              </div>

              <div className="attention-benefit-item">
                <div className="attention-benefit-number">03</div>
                <h4 className="attention-benefit-title">E-Commerce Optimization</h4>
                <p className="attention-benefit-text">
                  Improve product pages and checkout flows by analyzing customer attention patterns.
                </p>
              </div>

              <div className="attention-benefit-item">
                <div className="attention-benefit-number">04</div>
                <h4 className="attention-benefit-title">Educational Research</h4>
                <p className="attention-benefit-text">
                  Study learning patterns and attention spans to enhance educational materials.
                </p>
              </div>
            </div>
          </div>

          <div className="attention-cta-section">
            <h2 className="attention-cta-title">Start Analyzing Attention Today</h2>
            <p className="attention-cta-text">
              Transform your understanding of user behavior with advanced attention analytics.
            </p>
            <div className="attention-cta-buttons">
              <button className="attention-cta-btn attention-cta-primary">
                Try Free Demo
              </button>
              <button className="attention-cta-btn attention-cta-secondary">
                View Sample Reports
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttentionAnalysis;