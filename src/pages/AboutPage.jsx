import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const features = [
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Industry-leading pool equipment with international standards'
    },
    {
      icon: '⚡',
      title: 'Smart Automation',
      description: 'Advanced technology for effortless pool management'
    },
    {
      icon: '🔧',
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services'
    },
    {
      icon: '🌊',
      title: 'Eco-Friendly',
      description: 'Energy-efficient solutions for sustainable pool care'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: '/images/about/pool-house.jpg.webp'
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Director',
      image: '/images/about/arctic-scene.jpg.png'
    },
    {
      name: 'Amit Patel',
      role: 'Operations Manager',
      image: '/images/about/catalogue.jpg.png'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Noble Nautica
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming pools with premium equipment and exceptional service since 2009
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-container">
          <motion.div 
            className="about-story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in 2009, Noble Nautica has been at the forefront of pool equipment 
              innovation in India. We started with a simple mission: to make pool 
              maintenance effortless and enjoyable for every pool owner.
            </p>
            <p>
              Today, we're proud to serve over 500 satisfied clients across the country, 
              offering premium pool equipment, automation solutions, and unparalleled 
              customer service.
            </p>
            <motion.button
              className="about-cta-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(44, 95, 127, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Our Products
            </motion.button>
          </motion.div>

          <motion.div 
            className="about-story-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/images/about/pool-house.jpg.webp" alt="Our Story" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="about-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <div className="about-team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="team-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={member.image} alt={member.name} />
              </motion.div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
