import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>Installed in 12,000+ sites</h3>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              </svg>
            </div>
            <h3>Exporting to 80+ countries</h3>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>100+ worldwide distributors</h3>
          </div>
        </div>

        <div className="success-stories">
          <div className="stories-content">
            <h2>Clients Success Stories</h2>
            <p>
              Manufactured with care, trusted by professionals across every stage 
              of the project. From blueprint to build, our partners rely on us for 
              precision, performance, and peace of mind.
            </p>
          </div>
          <div className="stories-image">
<img src="/images/about/arctic-scene.jpg.png" alt="Success Stories" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
