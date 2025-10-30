import React from 'react';
import './Documentation.css';

const Documentation = () => {
  const handleDownload = (reportType) => {
    const pdfPaths = {
      proposal: '/pdfs/project-proposal.pdf',
      final: '/pdfs/final-report.pdf'
    };
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = pdfPaths[reportType];
    link.download = reportType === 'proposal' ? 'Project-Proposal.pdf' : 'Final-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (reportType) => {
    const pdfPaths = {
      proposal: '/pdfs/project-proposal.pdf',
      final: '/pdfs/final-report.pdf'
    };
    
    // Open PDF in new tab
    window.open(pdfPaths[reportType], '_blank');
  };

  return (
    <div className="docs-page-container">
      {/* HERO SECTION */}
      <section className="docs-hero-section">
        <div className="docs-hero-content">
          <h1 className="docs-hero-title">
            Project Documentation
          </h1>
          <p className="docs-hero-subtitle">
            Access comprehensive documentation for the Intelligent Gaze Tracking System.
            View or download our project proposal and final report to understand the research,
            development process, and technical implementation details.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="docs-content-section">
        <div className="docs-content-wrapper">
          <h2 className="docs-section-title">Available Reports</h2>
          <p className="docs-section-text">
            Our documentation provides in-depth insights into the gaze tracking system's architecture,
            methodology, and results. Each report offers detailed technical specifications and research findings.
          </p>

          {/* REPORT CARDS */}
          <div className="docs-reports-grid">
            {/* PROJECT PROPOSAL */}
            <div className="docs-report-card">
              <div className="docs-report-header">
                <div className="docs-report-icon">📄</div>
                <div className="docs-report-badge">Proposal</div>
              </div>
              <h3 className="docs-report-title">Project Proposal</h3>
              <p className="docs-report-description">
                The initial project proposal outlines our research objectives, proposed methodology,
                system architecture, and expected outcomes for the gaze tracking system development.
              </p>
              
              <div className="docs-report-details">
                <div className="docs-detail-item">
                  <span className="docs-detail-label">Document Type:</span>
                  <span className="docs-detail-value">Research Proposal</span>
                </div>
                <div className="docs-detail-item">
                  <span className="docs-detail-label">Pages:</span>
                  <span className="docs-detail-value">~40 pages</span>
                </div>
                <div className="docs-detail-item">
                  <span className="docs-detail-label">Topics Covered:</span>
                  <span className="docs-detail-value">Background, Methodology, Timeline</span>
                </div>
              </div>

              <div className="docs-report-actions">
                <button 
                  className="docs-action-btn docs-btn-primary"
                  onClick={() => handleView('proposal')}
                >
                  <span className="docs-btn-icon">👁️</span>
                  View Report
                </button>
                <button 
                  className="docs-action-btn docs-btn-secondary"
                  onClick={() => handleDownload('proposal')}
                >
                  <span className="docs-btn-icon">⬇️</span>
                  Download PDF
                </button>
              </div>
            </div>

            {/* FINAL REPORT */}
            <div className="docs-report-card docs-report-featured">
              <div className="docs-featured-badge">Latest</div>
              <div className="docs-report-header">
                <div className="docs-report-icon">📘</div>
                <div className="docs-report-badge">Final Report</div>
              </div>
              <h3 className="docs-report-title">Final Project Report</h3>
              <p className="docs-report-description">
                The comprehensive final report documents the complete implementation, testing results,
                performance analysis, and conclusions of the intelligent gaze tracking system.
              </p>
              
              <div className="docs-report-details">
                <div className="docs-detail-item">
                  <span className="docs-detail-label">Document Type:</span>
                  <span className="docs-detail-value">Technical Report</span>
                </div>
                <div className="docs-detail-item">
                  <span className="docs-detail-label">Pages:</span>
                  <span className="docs-detail-value">~80 pages</span>
                </div>
                <div className="docs-detail-item">
                  <span className="docs-detail-label">Topics Covered:</span>
                  <span className="docs-detail-value">Implementation, Results, Analysis</span>
                </div>
              </div>

              <div className="docs-report-actions">
                <button 
                  className="docs-action-btn docs-btn-primary"
                  onClick={() => handleView('final')}
                >
                  <span className="docs-btn-icon">👁️</span>
                  View Report
                </button>
                <button 
                  className="docs-action-btn docs-btn-secondary"
                  onClick={() => handleDownload('final')}
                >
                  <span className="docs-btn-icon">⬇️</span>
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* WHAT'S INSIDE SECTION */}
          <div className="docs-content-overview">
            <h2 className="docs-section-title">What's Inside</h2>
            <div className="docs-overview-grid">
              <div className="docs-overview-item">
                <div className="docs-overview-number">01</div>
                <h4 className="docs-overview-title">Research Foundation</h4>
                <p className="docs-overview-text">
                  Literature review, problem statement, and theoretical background of gaze tracking technology.
                </p>
              </div>

              <div className="docs-overview-item">
                <div className="docs-overview-number">02</div>
                <h4 className="docs-overview-title">System Architecture</h4>
                <p className="docs-overview-text">
                  Detailed diagrams and explanations of the CNN model, MediaPipe integration, and calibration system.
                </p>
              </div>

              <div className="docs-overview-item">
                <div className="docs-overview-number">03</div>
                <h4 className="docs-overview-title">Implementation Details</h4>
                <p className="docs-overview-text">
                  Technical specifications, algorithms, code architecture, and development methodology.
                </p>
              </div>

              <div className="docs-overview-item">
                <div className="docs-overview-number">04</div>
                <h4 className="docs-overview-title">Testing & Results</h4>
                <p className="docs-overview-text">
                  Performance metrics, accuracy measurements, user studies, and comparative analysis.
                </p>
              </div>

              <div className="docs-overview-item">
                <div className="docs-overview-number">05</div>
                <h4 className="docs-overview-title">Use Cases</h4>
                <p className="docs-overview-text">
                  Real-world applications, accessibility features, and integration examples with various software.
                </p>
              </div>

              <div className="docs-overview-item">
                <div className="docs-overview-number">06</div>
                <h4 className="docs-overview-title">Future Directions</h4>
                <p className="docs-overview-text">
                  Recommendations, potential improvements, and roadmap for future enhancements.
                </p>
              </div>
            </div>
          </div>

          {/* ADDITIONAL RESOURCES */}
          <div className="docs-resources-section">
            <h2 className="docs-section-title">Additional Resources</h2>
            <div className="docs-resources-grid">
              <div className="docs-resource-card">
                <div className="docs-resource-icon">🔗</div>
                <h4 className="docs-resource-title">GitHub Repository</h4>
                <p className="docs-resource-text">
                  Access the complete source code and contribute to the project.
                </p>
                <a href="#" className="docs-resource-link">View on GitHub →</a>
              </div>

              <div className="docs-resource-card">
                <div className="docs-resource-icon">📊</div>
                <h4 className="docs-resource-title">Presentation Slides</h4>
                <p className="docs-resource-text">
                  View the project presentation and key findings summary.
                </p>
                <a href="#" className="docs-resource-link">View Slides →</a>
              </div>

              <div className="docs-resource-card">
                <div className="docs-resource-icon">🎥</div>
                <h4 className="docs-resource-title">Demo Videos</h4>
                <p className="docs-resource-text">
                  Watch video demonstrations of the system in action.
                </p>
                <a href="#" className="docs-resource-link">Watch Videos →</a>
              </div>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="docs-contact-section">
            <h2 className="docs-contact-title">Need More Information?</h2>
            <p className="docs-contact-text">
              If you have questions about the documentation or would like to discuss the project further,
              feel free to reach out to our team.
            </p>
            <button className="docs-contact-btn">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;