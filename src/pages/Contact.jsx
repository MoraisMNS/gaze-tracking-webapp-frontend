import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      {/* HERO SECTION */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Have questions about <strong>Look Track Vision</strong>?  
            Reach out to our project team for collaborations, feedback, or inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION SECTION */}
      <section className="contact-info-section">
        <h2 className="contact-section-title">Contact Information</h2>
        <p className="contact-section-text">
          We’re always happy to connect! Whether it’s about our eye-tracking technology,
          accessibility innovation, or research collaboration — we’d love to hear from you.
        </p>

        <div className="contact-info-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>looktrackvision@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>+94 71 234 5678</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>Faculty of Engineering, University Of Ruhuna, Hapugala, Galle, Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="contact-team-section">
        <h2 className="contact-section-title">Our Project Team</h2>
        <div className="contact-team-grid">
          <div className="team-member">
            <h3 className="team-name">Supervisor</h3>
            <p className="team-role">Ms. O.G.Y.N. Gamlath</p>
          </div>

          <div className="team-member">
            <h3 className="team-name">J. Praveenan</h3>
            <p className="team-role">Project Lead | Developer</p>
          </div>

          <div className="team-member">
            <h3 className="team-name">H. Neethika</h3>
            <p className="team-role">Project Lead | Developer</p>
          </div>

          <div className="team-member">
            <h3 className="team-name">Minhaj MHA</h3>
            <p className="team-role">Research & Development | UI Designer</p>
          </div>    

          <div className="team-member">
            <h3 className="team-name">Morais MNS</h3>
            <p className="team-role">Web Developer</p>
          </div>
        </div>
      </section>

      {/* MESSAGE FORM SECTION */}
      <section className="contact-form-section">
        <h2 className="contact-section-title">Send Us a Message</h2>
        <p className="contact-section-text">
          Have feedback or questions? Drop us a quick message below — we’ll get back to you soon.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
      </section>

      {/* CTA SECTION */}
      <section className="contact-cta-section">
        <h2 className="contact-cta-title">Let’s Build Accessibility Together</h2>
        <p className="contact-cta-text">
          We’re passionate about creating inclusive technologies through gaze, blink, and voice control.
          Reach out to collaborate or learn more about our work.
        </p>
        <div className="contact-cta-buttons">
          <button className="contact-cta-btn contact-cta-primary">View Our Demo Video</button>
          <button className="contact-cta-btn contact-cta-secondary">Email Us</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
