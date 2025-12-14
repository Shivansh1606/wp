import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Animated Background with correct path */}
      <motion.div 
        className="hero-background"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.jpg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your Pool Experience
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Premium pool equipment & automation solutions
        </motion.p>

        {/* Animated Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/products">
            <motion.button 
              className="btn-primary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(68, 107, 140, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote →
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Feature Cards */}
        <motion.div 
          className="hero-features"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: "⚡", text: "Smart Automation" },
            { icon: "🌊", text: "Premium Quality" },
            { icon: "🔧", text: "Expert Support" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
