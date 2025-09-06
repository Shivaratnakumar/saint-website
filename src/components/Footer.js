import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    about: [
      { name: 'Our Mission', href: '#about' },
      { name: 'Our Vision', href: '#about' },
      { name: 'Community', href: '#about' },
      { name: 'Leadership', href: '#about' }
    ],
    services: [
      { name: 'Meditation', href: '#services' },
      { name: 'Spiritual Counseling', href: '#services' },
      { name: 'Yoga Classes', href: '#services' },
      { name: 'Community Service', href: '#services' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Scriptures', href: '#' },
      { name: 'Guided Meditations', href: '#' },
      { name: 'Spiritual Articles', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            data-aos="fade-up"
          >
            <div className="footer-logo">
              <span className="logo-text">Divine Grace</span>
              <span className="logo-subtitle">Spiritual Organization</span>
            </div>
            <p className="footer-description">
              A spiritual sanctuary dedicated to inner peace, wisdom, and enlightenment. 
              Join us on a journey of self-discovery and divine connection.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <social.icon />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div 
              className="footer-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>About Us</h4>
              <ul>
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-column"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-column"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-column"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="footer-bottom"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Divine Grace. All rights reserved. Made with <FaHeart className="heart-icon" /> for spiritual growth.
            </p>
            <motion.button 
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
