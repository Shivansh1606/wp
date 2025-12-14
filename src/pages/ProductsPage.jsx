import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Products.css';

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      id: 1,
      category: 'Filtration',
      name: 'NN-FC-TM SERIES Filtration Combo',
      image: '/images/products/filtration-combo.jpg.png',
      description: 'Designed for easy setup of domestic pools, the NN-FC-TM SERIES Filtration Combo offers the ideal solution for home swimming pools.',
      price: '₹65,000',
      features: ['Easy Setup', 'Domestic Pools', 'Complete Solution']
    },
    {
      id: 2,
      category: 'Pumps',
      name: 'NN-VSP-PP Variable Speed Pumps',
      image: '/images/products/variable-pump.jpg.png',
      description: 'NN-VSP-PP variable-speed pumps continuously adjust their water flow to match real-time system demand.',
      price: '₹45,000',
      features: ['Variable Speed', 'Energy Efficient', 'Smart Control']
    },
    {
      id: 3,
      category: 'Air Blowers',
      name: 'Radial Flow Gas Pump',
      image: '/images/products/radial-blower.jpg.png',
      description: 'The Radial Flow Gas Pump is a high-performance air-moving solution, also known as a ring blower.',
      price: '₹35,000',
      features: ['High Performance', 'Durable', 'Low Noise']
    }
  ];

  const categories = ['All', 'Filtration', 'Pumps', 'Air Blowers'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="products-page">
      {/* Page Header */}
      <motion.div 
        className="products-page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Products</h1>
        <p>Explore our comprehensive range of premium pool equipment</p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="products-page-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <div className="products-page-grid">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-page-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="product-page-badge">{product.category}</div>
            
            <motion.div 
              className="product-page-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image} alt={product.name} />
            </motion.div>
            
            <div className="product-page-content">
              <h3>{product.name}</h3>
              <p className="product-page-description">{product.description}</p>
              
              <ul className="product-page-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              
              <div className="product-page-footer">
                <span className="product-page-price">{product.price}</span>
                <motion.button
                  className="product-page-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
