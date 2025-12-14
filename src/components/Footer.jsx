import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const ctaBackgroundStyle = {
    background: 'linear-gradient(135deg, #5A8CB5 0%, #446B8C 50%, #2C4A62 100%)'
  };

  return (
    <footer className="footer">
      <div className="footer-cta" style={ctaBackgroundStyle}>
        <div className="cta-content">
          <p className="cta-label">Get a Quote for Your Pool Business</p>
          <h3>Talk to us today.</h3>
        </div>
        <Link to="/contact" className="cta-btn">Contact our experts</Link>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-box">
                <span className="logo-text">NN</span>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Subscribe To Our Newsletter</h3>
            <p>Be the first to know about new arrivals and offers</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            <div className="wibi-badge">WIBI</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Noble Nautica. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
