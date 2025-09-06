import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: FaHeart,
      title: 'Spiritual Guidance',
      description: 'Personalized spiritual counseling and guidance for your journey towards enlightenment and inner peace.'
    },
    {
      icon: FaUsers,
      title: 'Community Support',
      description: 'Join a supportive community of like-minded individuals on their spiritual journey and personal growth.'
    },
    {
      icon: FaLightbulb,
      title: 'Ancient Wisdom',
      description: 'Learn from ancient Hindu teachings and apply timeless wisdom to modern life challenges.'
    },
    {
      icon: FaHandsHelping,
      title: 'Service to Others',
      description: 'Engage in meaningful service activities that contribute to the betterment of society and humanity.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="about-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">About Divine Grace</h2>
          <p className="section-subtitle">
            We are a spiritual organization dedicated to spreading peace, wisdom, and enlightenment 
            through ancient Hindu teachings and modern practices.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            data-aos="fade-right"
          >
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide a sacred space where individuals can explore their spiritual path, 
                discover inner peace, and connect with the divine essence within themselves. 
                We believe that every soul has the potential for enlightenment and our role 
                is to guide and support this journey.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                A world where spiritual wisdom and ancient teachings are accessible to all, 
                creating a more compassionate, peaceful, and enlightened society. We envision 
                a future where individuals live in harmony with themselves, others, and nature.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="about-features"
            data-aos="fade-left"
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="feature-card"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    damping: 20
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Community Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Spiritual Sessions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Lives Touched</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
