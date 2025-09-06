import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Community Member',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'Divine Grace has transformed my life completely. The meditation sessions and spiritual guidance have helped me find inner peace I never knew existed. The community is so supportive and welcoming.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Yoga Practitioner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'The spiritual teachings here are profound yet practical. I\'ve learned to apply ancient wisdom to my daily life, and it has made such a positive difference. The teachers are knowledgeable and compassionate.',
      rating: 5
    },
    {
      id: 3,
      name: 'Anita Patel',
      role: 'Meditation Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'I was skeptical about spiritual practices, but Divine Grace made everything so accessible and meaningful. The community service activities have given me a sense of purpose I was missing.',
      rating: 5
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Business Professional',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'The stress management techniques I learned here have revolutionized my work life. The spiritual counseling sessions helped me find balance between my professional and personal life.',
      rating: 5
    },
    {
      id: 5,
      name: 'Sunita Devi',
      role: 'Retired Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      text: 'At my age, I thought I knew everything about life. Divine Grace taught me that spiritual learning never ends. The scripture study sessions have opened new dimensions of understanding.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div 
          className="testimonials-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Hear from our community members about their transformative spiritual journey with Divine Grace.
          </p>
        </motion.div>

        <div className="testimonials-content">
          <motion.div 
            className="testimonial-carousel"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-quote">
                  <FaQuoteLeft className="quote-icon" />
                </div>
                
                <div className="testimonial-text">
                  <p>"{testimonials[currentTestimonial].text}"</p>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <FaStar key={index} className="star" />
                  ))}
                </div>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                    />
                  </div>
                  <div className="author-info">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <p>{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
              <button 
                className="carousel-btn prev-btn"
                onClick={prevTestimonial}
              >
                <FaChevronLeft />
              </button>
              
              <button 
                className="carousel-btn next-btn"
                onClick={nextTestimonial}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="testimonials-stats"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Recommend Us</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
