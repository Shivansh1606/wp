import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import '../styles/Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Variable Speed Pump',
      image: '/images/products/variable-pump.jpg.png',
      description: 'Energy-efficient variable speed pool pump with smart control technology',
      price: '₹45,000',
      tag: 'Popular'
    },
    {
      id: 2,
      name: 'Filtration Combo',
      image: '/images/products/filtration-combo.jpg.png',
      description: 'Complete filtration system designed for domestic pools',
      price: '₹65,000',
      tag: 'Best Seller'
    },
    {
      id: 3,
      name: 'Radial Blower',
      image: '/images/products/radial-blower.jpg.png',
      description: 'High-performance air blower for pool systems',
      price: '₹35,000',
      tag: 'New'
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      
      {/* Featured Products Section */}
      <section className="home-products-section">
        <motion.div 
          className="home-products-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Products</h2>
          <p>Discover our most popular pool solutions</p>
        </motion.div>
        
        <div className="home-products-grid">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="home-product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Product Tag */}
              <div className="home-product-tag">{product.tag}</div>

              {/* Product Image */}
              <motion.div 
                className="home-product-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={product.image} alt={product.name} />
              </motion.div>
              
              {/* Product Info */}
              <div className="home-product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="home-product-footer">
                  <span className="home-product-price">{product.price}</span>
                  <Link to="/products">
                    <motion.button
                      className="home-product-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="home-products-view-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/products">
            <motion.button
              className="view-all-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(44, 95, 127, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products →
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
