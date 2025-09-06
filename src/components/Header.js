import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCogs, FaImages, FaComments, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaInfoCircle },
    { name: 'Services', href: '#services', icon: FaCogs },
    { name: 'Gallery', href: '#gallery', icon: FaImages },
    { name: 'Testimonials', href: '#testimonials', icon: FaComments },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="logo-text">Divine Grace</span>
            <span className="logo-subtitle">Spiritual Organization</span>
          </motion.div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    <item.icon className="nav-icon" />
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
