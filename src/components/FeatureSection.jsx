import { CheckCircle } from "lucide-react";
import "./FeatureSection.css";
import landingImage from "../assets/landing_page_img.jpg";

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        
        {/* ---------- LEFT: IMAGE ---------- */}
        <div className="feature-image-wrapper">
          <img
            src={landingImage}
            alt="Person using eye tracking system"
            className="feature-image"
          />
        </div>

        {/* ---------- RIGHT: TEXT ---------- */}
        <div className="feature-text">
          <h2 className="feature-title">
            Effortlessly analyze human focus with{" "}
            <span className="highlight">AI-powered eye tracking tools.</span>
          </h2>

          <p className="feature-description">
            Try our platform to understand user attention in a simple and
            powerful way. Boost{" "}
            <strong>decision-making</strong>, improve{" "}
            <strong>data accuracy</strong>, and visualize{" "}
            <strong>gaze behavior</strong> across different environments — all
            in one dashboard.
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
