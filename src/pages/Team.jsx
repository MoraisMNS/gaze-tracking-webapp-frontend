import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'H.Neethika',
      image: '/images/team/member1.jpg', 
      email: 'member1@email.com',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'J.Praveenan',
      image: '/images/team/member2.jpg', 
      email: 'member2@email.com',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Minhaj MHA',
      image: '/images/team/member3.jpg', 
      email: 'member3@email.com',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Morais MNS',
      image: '/images/team/member4.jpg', 
      email: 'member4@email.com',
      linkedin: '#',
      github: '#'
    }
  ];

  const supervisor = {
    name: 'Dr. Supervisor Name',
    image: '/images/team/supervisor.jpg', 
    email: 'supervisor@university.edu',
    linkedin: '#'
  };

  return (
    <div className="team-page-container">
      {/* HERO SECTION */}
      <section className="team-hero-section">
        <div className="team-hero-content">
          <h1 className="team-hero-title">
            Meet Our Team
          </h1>
          <p className="team-hero-subtitle">
            The passionate minds behind the Intelligent Gaze Tracking System.
            Our diverse team combines expertise in machine learning, computer vision,
            and software development to create innovative accessibility solutions.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="team-content-section">
        <div className="team-content-wrapper">
          {/* PROJECT OVERVIEW */}
          <div className="team-project-overview">
            <h2 className="team-section-title">Our Journey</h2>
            <p className="team-section-text">
              This final year project brought together a dedicated team of students passionate about
              leveraging technology for accessibility. Through months of research, development, and testing,
              we've created a gaze tracking system that empowers users with hands-free computer interaction.
            </p>
          </div>

          {/* TEAM MEMBERS GRID */}
          <div className="team-members-section">
            <h2 className="team-section-title">Development Team</h2>
            <div className="team-members-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member-card">
                  <div className="team-member-image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-member-image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%233b82f6" width="300" height="300"/%3E%3Ctext fill="white" font-size="100" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' + member.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="team-member-overlay">
                      <div className="team-social-links">
                        <a href={`mailto:${member.email}`} className="team-social-icon" title="Email">
                          📧
                        </a>
                        <a href={member.linkedin} className="team-social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                          💼
                        </a>
                        <a href={member.github} className="team-social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                          💻
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-member-info">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                    <p className="team-member-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUPERVISOR SECTION */}
          <div className="team-supervisor-section">
            <h2 className="team-section-title">Project Supervisor</h2>
            <div className="team-supervisor-card">
              <div className="team-supervisor-image-wrapper">
                <img 
                  src={supervisor.image} 
                  alt={supervisor.name}
                  className="team-supervisor-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%236366f1" width="200" height="200"/%3E%3Ctext fill="white" font-size="80" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' + supervisor.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="team-supervisor-info">
                <h3 className="team-supervisor-name">{supervisor.name}</h3>
                <p className="team-supervisor-role">{supervisor.role}</p>
                <p className="team-supervisor-description">{supervisor.description}</p>
                <div className="team-supervisor-contact">
                  <a href={`mailto:${supervisor.email}`} className="team-contact-btn">
                    <span className="team-contact-icon">📧</span>
                    Contact Supervisor
                  </a>
                  <a href={supervisor.linkedin} className="team-contact-btn team-contact-secondary" target="_blank" rel="noopener noreferrer">
                    <span className="team-contact-icon">💼</span>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTRIBUTIONS SECTION */}
          <div className="team-contributions-section">
            <h2 className="team-section-title">Key Contributions</h2>
            <div className="team-contributions-grid">
              <div className="team-contribution-card">
                <div className="team-contribution-icon">🧠</div>
                <h4 className="team-contribution-title">Machine Learning</h4>
                <p className="team-contribution-text">
                  Developed and trained CNN models for accurate gaze direction detection with 95%+ accuracy.
                </p>
              </div>

              <div className="team-contribution-card">
                <div className="team-contribution-icon">👁️</div>
                <h4 className="team-contribution-title">Computer Vision</h4>
                <p className="team-contribution-text">
                  Integrated MediaPipe for real-time facial landmark detection and iris tracking.
                </p>
              </div>

              <div className="team-contribution-card">
                <div className="team-contribution-icon">⚙️</div>
                <h4 className="team-contribution-title">System Integration</h4>
                <p className="team-contribution-text">
                  Built seamless integration with desktop applications like PowerPoint and Zoom.
                </p>
              </div>

              <div className="team-contribution-card">
                <div className="team-contribution-icon">🎨</div>
                <h4 className="team-contribution-title">User Experience</h4>
                <p className="team-contribution-text">
                  Designed intuitive interfaces and visualization tools including attention heatmaps.
                </p>
              </div>

              <div className="team-contribution-card">
                <div className="team-contribution-icon">🗣️</div>
                <h4 className="team-contribution-title">Voice Control</h4>
                <p className="team-contribution-text">
                  Implemented OpenAI Whisper integration for speech-to-text command processing.
                </p>
              </div>

              <div className="team-contribution-card">
                <div className="team-contribution-icon">🔬</div>
                <h4 className="team-contribution-title">Research & Testing</h4>
                <p className="team-contribution-text">
                  Conducted extensive user studies and performance evaluations to validate the system.
                </p>
              </div>
            </div>
          </div>

          {/* COLLABORATION SECTION */}
          <div className="team-collaboration-section">
            <h2 className="team-collaboration-title">Built with Collaboration</h2>
            <p className="team-collaboration-text">
              Our success stems from effective teamwork, regular meetings, and shared commitment to creating
              accessible technology. Each team member brought unique skills and perspectives that enriched
              the final product.
            </p>
            <div className="team-stats-grid">
              <div className="team-stat-item">
                <div className="team-stat-number">9</div>
                <div className="team-stat-label">Months of Development</div>
              </div>
              <div className="team-stat-item">
                <div className="team-stat-number">500+</div>
                <div className="team-stat-label">Hours Invested</div>
              </div>
              <div className="team-stat-item">
                <div className="team-stat-number">50+</div>
                <div className="team-stat-label">User Tests Conducted</div>
              </div>
              <div className="team-stat-item">
                <div className="team-stat-number">95%</div>
                <div className="team-stat-label">Accuracy Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;