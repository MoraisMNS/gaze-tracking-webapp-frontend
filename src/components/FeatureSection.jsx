import { CheckCircle } from "lucide-react";
import "./FeatureSection.css";
import landingImage from "../assets/landing-page-img.png";

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        
        <div className="feature-image-wrapper">
          <img
            src={landingImage}
            alt="Person using eye tracking system"
            className="feature-image"
          />
        </div>

        <div className="feature-text">
          <h2 className="feature-title">
            Enable hands-free computer interaction using{" "}
            <span className="highlight">AI-powered gaze tracking and blink recognition</span>
          </h2>

          <p className="feature-description">
              Try our platform to enable hands-free computer interaction in a simple and
              powerful way. Boost{" "}
              <strong>accessibility</strong>, improve{" "}
              <strong>interaction accuracy</strong>, and interpret{" "}
              <strong>gaze direction</strong> across different environments — all
              in one system.
          </p>

          <hr className="feature-divider" />

          <ul className="feature-list">
            {[
              "Increased accuracy",
              "Improved attention insights",
              "Better UX evaluation",
              "Enhanced real-time tracking",
              "Actionable gaze analytics",
            ].map((item, index) => (
              <li key={index} className="feature-item">
                <CheckCircle className="feature-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
