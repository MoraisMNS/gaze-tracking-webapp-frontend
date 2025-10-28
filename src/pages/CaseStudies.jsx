import React from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  const studies = [
    {
      title: "Assistive Communication for Disabilities",
      source: "Louedec et al., 2021",
      description:
        "Developed a deep learning–based gaze tracking model that allowed individuals with motor disabilities to interact hands-free with computers. The system used saliency maps to predict user intent and achieved over 90% interaction accuracy.",
      result: "Enabled inclusive, adaptive interfaces using only eye movement.",
      icon: "♿",
    },
    {
      title: "Driver Fatigue Detection",
      source: "Mohamed et al., 2014",
      description:
        "A smartphone-based system analyzed blinking and yawning to detect driver drowsiness. By tracking eye closures using front camera input, it provided early fatigue warnings, reducing accident risks.",
      result: "Achieved real-time detection using only mobile hardware.",
      icon: "🚗",
    },
    {
      title: "Marketing Attention Analysis",
      source: "Modi & Singh, 2022",
      description:
        "Used CNN-based gaze estimation to analyze user attention on Facebook advertisements. Gaze heatmaps revealed where users focused most, helping optimize digital layouts for better engagement.",
      result: "Improved ad design efficiency through attention mapping.",
      icon: "📊",
    },
    {
      title: "Wearable Eye-Tracking Device",
      source: "Chang et al., 2024",
      description:
        "Built a wearable, low-cost eye tracker with infrared point sensors to capture both eyes' movements accurately. Useful for medical therapy and rehabilitation monitoring.",
      result: "Achieved high precision in compact, affordable hardware.",
      icon: "👓",
    },
    {
      title: "Webcam-Based Gaze Estimation",
      source: "Vidhya & Faria, 2025",
      description:
        "Implemented a CNN model for real-time gaze estimation using only standard webcams. The model achieved 96% accuracy and demonstrated that advanced gaze tracking can run on consumer devices.",
      result: "Validated deep learning’s power in affordable HCI solutions.",
      icon: "💻",
    },
  ];

  return (
    <div className="case-page-container">
      <section className="case-hero-section">
        <h1 className="case-hero-title">Case Studies in Gaze Tracking</h1>
        <p className="case-hero-subtitle">
          Explore real-world research that inspired our system’s design — from assistive
          technology to real-time AI vision applications.
        </p>
      </section>

      <section className="case-grid-section">
        <div className="case-grid">
          {studies.map((study, index) => (
            <div key={index} className="case-card">
              <div className="case-icon">{study.icon}</div>
              <h3 className="case-title">{study.title}</h3>
              <p className="case-source">{study.source}</p>
              <p className="case-description">{study.description}</p>
              <p className="case-result">{study.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-summary-section">
        <h2>Key Takeaways</h2>
        <ul>
          <li>Deep learning enhances accuracy and real-time performance.</li>
          <li>Affordable webcam-based systems make gaze tracking accessible.</li>
          <li>Gaze tracking supports diverse domains — medical, automotive, marketing, and education.</li>
          <li>Integrating multimodal inputs like voice boosts usability and inclusivity.</li>
        </ul>
      </section>
    </div>
  );
};

export default CaseStudies;
