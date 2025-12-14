import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    enquiryType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      enquiryType: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Ready to transform your aquatic space? Let's discuss your project and 
          find the perfect solutions.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-box">
              <h3>Our Location</h3>
              <div className="divider"></div>
              <h4>Address</h4>
              <p>Visit us at our office location</p>
              <address>9 Hill Lane, Ruislip, HA4 7JJ, UK</address>
            </div>

            <div className="info-box">
              <h3>Send a Mail</h3>
              <div className="divider"></div>
              <p>General enquiries for you</p>
              <a href="mailto:noblenautica13@gmail.com">noblenautica13@gmail.com</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Partnership</h3>
            <h4>Send your message</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Type of Enquiry"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({...formData, enquiryType: e.target.value})}
                  required
                />
              </div>

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows="6"
              ></textarea>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
