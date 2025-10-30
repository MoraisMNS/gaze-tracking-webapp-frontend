import React from 'react';
import './FAQ.css';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  const handleDocsClick = () => {
    navigate('/documentation');
  };
  const faqs = [
    {
      question: "What is Look Track Vision?",
      answer:
        "Look Track Vision is an intelligent human–computer interaction system that enables users to control desktop applications using eye movements, blinks, and voice commands. It combines gaze tracking, calibration, and AI-driven prediction to offer hands-free accessibility."
    },
    {
      question: "How does the gaze tracking system work?",
      answer:
        "The system uses a Convolutional Neural Network (CNN) and MediaPipe facial landmarks to detect eye movements in real time. It classifies gaze direction into five categories — left, right, up, down, and center — and maps them to computer actions."
    },
    {
      question: "What role does calibration play?",
      answer:
        "Calibration ensures that gaze detection is personalized for each user. During calibration, the system records iris offsets and threshold values that compensate for differences in head position, lighting, and screen size."
    },
    {
      question: "How is blink detection used for interaction?",
      answer:
        "Blink detection uses the Eye Aspect Ratio (EAR) technique to recognize intentional blinks. These are used as control actions — such as selecting, confirming, or switching between interface elements — improving accessibility for users with limited mobility."
    },
    {
      question: "What is the Hybrid Prediction System?",
      answer:
        "The hybrid model fuses CNN gaze predictions with calibration-based iris offsets. This combination improves accuracy and stability by dynamically adjusting to user variations and lighting changes."
    },
    {
      question: "Does the system support voice control?",
      answer:
        "Yes. Look Track Vision integrates OpenAI Whisper to process speech commands. Users can open applications, type text, or trigger actions using natural voice input."
    },
    {
      question: "What applications can be controlled?",
      answer:
        "The system supports multiple desktop applications, including PowerPoint for slide control, Zoom for meeting navigation, and Media Player for playback operations. Integration is handled through system-level command mapping."
    },
    {
      question: "How does the attention heatmap work?",
      answer:
        "The attention heatmap visualizes focus intensity by mapping gaze points over time. Red regions indicate high focus, while blue regions represent lower attention. It helps analyze user behavior and visual engagement."
    },
    {
      question: "Is this a web-based system?",
      answer:
        "The desktop application performs real-time gaze tracking and interaction using the user's webcam. The web application serves as a showcase — presenting the system’s features, architecture, and analytics visually."
    },
    {
      question: "Who developed Look Track Vision?",
      answer:
        "Look Track Vision was developed by Group 69 — J. Praveenan, H. Neethika, Minhaj M.H.A and Morais M.N.S. — under the supervision of Ms. O.G.Y.N. Gamlath, as a final-year project at the Faculty of Engineering, University Of Ruhuna, Sri Lanka."
    }
  ];

  return (
    <div className="faq-page-container">
      {/* HERO SECTION */}
      <section className="faq-hero-section">
        <div className="faq-hero-content">
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">
            Find answers to common questions about Look Track Vision’s gaze tracking, calibration,
            and human–computer interaction system.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT SECTION */}
      <section className="faq-content-section">
        <div className="faq-content-wrapper">
          <h2 className="faq-section-title">Your Questions, Answered</h2>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="faq-cta-section">
        <h2 className="faq-cta-title">Still Have Questions?</h2>
        <p className="faq-cta-text">
          Reach out to our team for more information about Look Track Vision, its features, or collaboration opportunities.
        </p>
        <div className="faq-cta-buttons">
          <button className="faq-cta-btn faq-cta-primary" onClick={handleContactClick}>Contact Us</button>
          <button className="faq-cta-btn faq-cta-secondary" onClick={handleDocsClick}>View Documentation</button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
