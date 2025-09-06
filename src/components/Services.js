import React from 'react';
import { motion } from 'framer-motion';
import { FaOm, FaPray, FaBookOpen, FaHands, FaHeart, FaLeaf } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaOm,
      title: 'Meditation Sessions',
      description: 'Guided meditation practices to help you find inner peace and connect with your spiritual essence.',
      features: ['Daily group sessions', 'Personal guidance', 'Various techniques', 'Beginner friendly']
    },
    {
      icon: FaPray,
      title: 'Spiritual Counseling',
      description: 'One-on-one spiritual guidance to help you navigate life challenges with wisdom and grace.',
      features: ['Personal sessions', 'Life guidance', 'Spiritual growth', 'Confidential support']
    },
    {
      icon: FaBookOpen,
      title: 'Scripture Study',
      description: 'Deep dive into ancient Hindu scriptures and their practical applications in modern life.',
      features: ['Group discussions', 'Text analysis', 'Practical wisdom', 'Cultural understanding']
    },
    {
      icon: FaHands,
      title: 'Community Service',
      description: 'Engage in meaningful service activities that benefit the community and foster spiritual growth.',
      features: ['Volunteer opportunities', 'Charity work', 'Community building', 'Social impact']
    },
    {
      icon: FaHeart,
      title: 'Healing Sessions',
      description: 'Energy healing and spiritual wellness practices to restore balance and harmony.',
      features: ['Energy healing', 'Chakra balancing', 'Spiritual cleansing', 'Wellness guidance']
    },
    {
      icon: FaLeaf,
      title: 'Yoga & Wellness',
      description: 'Physical and spiritual practices combining yoga, breathing exercises, and mindfulness.',
      features: ['Yoga classes', 'Breathing exercises', 'Mindfulness', 'Physical wellness']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div 
          className="services-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Discover our comprehensive range of spiritual services designed to support your journey 
            towards enlightenment and inner peace.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 20
              }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="service-overlay">
                <motion.button 
                  className="btn btn-primary service-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-cta"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="cta-content">
            <h3>Ready to Begin Your Spiritual Journey?</h3>
            <p>Join our community and discover the transformative power of spiritual practice.</p>
            <motion.button 
              className="btn btn-primary cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
