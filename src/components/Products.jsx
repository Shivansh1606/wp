import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Variable Speed Pump",
      image: "/images/products/variable-pump.jpg.png",
      description: "Energy-efficient variable speed pool pump",
      price: "₹45,000"
    },
    {
      id: 2,
      name: "Filtration Combo",
      image: "/images/products/filtration-combo.jpg.png",
      description: "Complete filtration system",
      price: "₹65,000"
    },
    {
      id: 3,
      name: "Radial Blower",
      image: "/images/products/radial-blower.jpg.png",
      description: "High-performance air blower",
      price: "₹35,000"
    }
  ];

  return (
    <section className="products-section">
      <motion.div
        className="products-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Premium Products</h2>
        <p>Industry-leading pool equipment and automation solutions</p>
      </motion.div>

      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
            }}
          >
            <motion.div 
              className="product-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image} alt={product.name} />
            </motion.div>
            
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              
              <motion.button
                className="view-details-btn"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#2c5f7f",
                  color: "white"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
