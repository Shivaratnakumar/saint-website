import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: '123 Spiritual Lane, Peaceful Valley, CA 90210',
      description: 'Visit our serene spiritual center'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us for spiritual guidance'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@divinegrace.org',
      description: 'Send us your questions'
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: 'Mon-Sat: 9:00 AM - 8:00 PM',
      description: 'Sunday: 10:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="contact-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to begin your spiritual journey? We're here to guide and support you every step of the way.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            data-aos="fade-right"
          >
            <h3>Connect With Us</h3>
            <p>
              Whether you're seeking spiritual guidance, want to join our community, 
              or have questions about our services, we're here to help.
            </p>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  className="contact-info-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p className="contact-detail">{info.details}</p>
                    <p className="contact-description">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            data-aos="fade-left"
          >
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="success-icon" />
                  <h4>Thank You!</h4>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="spiritual-guidance">Spiritual Guidance</option>
                        <option value="community">Community Membership</option>
                        <option value="events">Events & Programs</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your spiritual journey or how we can help you..."
                    />
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="btn btn-primary submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="contact-map"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="map-placeholder">
            <div className="map-content">
              <FaMapMarkerAlt className="map-icon" />
              <h4>Visit Our Spiritual Center</h4>
              <p>123 Spiritual Lane, Peaceful Valley, CA 90210</p>
              <motion.button 
                className="btn btn-secondary map-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
