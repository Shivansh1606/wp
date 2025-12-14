import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-box">
            <span className="logo-text">NN</span>
          </div>
          <span className="logo-name">NOBLE<br/>NAUTICA</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
