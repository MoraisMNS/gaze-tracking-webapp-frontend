import React from "react";
import "./Tutorials.css";

const Tutorials = () => {
  const videos = [
  {
    title: "Tutorial 01: System Overview",
    subtitle: "Learn the basic workflow and main features of the gaze tracking system.",
    type: "mp4",
    src: "/videos/System-Overview.mp4",
    openUrl: "/videos/System-Overview.mp4",
    badge: "Beginner",
    icon: "🎥",
  },
   {
    title: "Tutorial 02: Calibration Process",
    subtitle: "Step-by-step calibration guide calibrate the system before using the application.",
    type: "mp4",
    src: "/videos/Calibration-Process.mp4",
    openUrl: "/videos/Calibration-Process.mp4",
    badge: "Intermediate",
    icon: "🎬",
  },
  {
    title: "Tutorial 03: Application Usage",
    subtitle: "This Shows how to use the system effectively by only using gaze control.",
    type: "mp4",
    src: "/videos/Application-Usage.mp4",
    openUrl: "/videos/Application-Usage.mp4",
    badge: "Advanced",
    icon: "🎬",
  },
];


  return (
    <div className="tuts-page-container">
      <section className="tuts-hero-section">
        <div className="tuts-hero-content">
          <h1 className="tuts-hero-title">Tutorials</h1>
          <p className="tuts-hero-subtitle">
            Watch step-by-step videos to understand how to use the Intelligent Gaze Tracking System.
            These tutorials cover overview, calibration, and practical usage tips.
          </p>
        </div>
      </section>

      <section className="tuts-content-section">
        <div className="tuts-content-wrapper">
          <h2 className="tuts-section-title">Video Tutorials</h2>
          <p className="tuts-section-text">
            Choose a tutorial below. You can watch directly on this page or open the video in a new tab.
          </p>

          <div className="tuts-videos-grid">
            {videos.map((v, idx) => (
              <div
                key={idx}
                className={`tuts-video-card ${idx === 0 ? "tuts-video-featured" : ""}`}
              >
                {idx === 0 && <div className="tuts-featured-badge">Start Here</div>}

                <div className="tuts-video-header">
                  <div className="tuts-video-icon">{v.icon}</div>
                  <div className="tuts-video-badge">{v.badge}</div>
                </div>

                <h3 className="tuts-video-title">{v.title}</h3>
                <p className="tuts-video-description">{v.subtitle}</p>

                <div className="tuts-video-frame">
                  {v.type === "youtube" ? (
                    <iframe
                      src={v.src}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video controls>
                      <source src={v.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div className="tuts-video-actions">
                  <a
                    className="tuts-action-btn tuts-btn-primary"
                    href={v.openUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="tuts-btn-icon">▶️</span>
                    Open Video
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="tuts-tips-section">
            <h2 className="tuts-section-title">Quick Tips</h2>

            <div className="tuts-tips-grid">
              <div className="tuts-tip-item">
                <div className="tuts-tip-number">01</div>
                <h4 className="tuts-tip-title">Good Lighting</h4>
                <p className="tuts-tip-text">
                  Ensure your face is clearly visible with balanced lighting for better gaze detection accuracy.
                </p>
              </div>

              <div className="tuts-tip-item">
                <div className="tuts-tip-number">02</div>
                <h4 className="tuts-tip-title">Stable Position</h4>
                <p className="tuts-tip-text">
                  Keep your head steady during calibration to improve precision and reduce noise.
                </p>
              </div>

              <div className="tuts-tip-item">
                <div className="tuts-tip-number">03</div>
                <h4 className="tuts-tip-title">Recalibrate if Needed</h4>
                <p className="tuts-tip-text">
                  If your environment changes (distance, monitor angle), run calibration again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
