import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - in a real project, these would be actual image URLs
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Meditation Session',
      title: 'Peaceful Meditation',
      description: 'Community members engaged in guided meditation practice'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1506905925346-14b1e5d71f15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Spiritual Gathering',
      title: 'Spiritual Gathering',
      description: 'Community members coming together for spiritual discussion'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Yoga Practice',
      title: 'Yoga Practice',
      description: 'Members practicing yoga and mindfulness exercises'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Community Service',
      title: 'Community Service',
      description: 'Volunteers engaged in community service activities'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Spiritual Teaching',
      title: 'Spiritual Teaching',
      description: 'Learning ancient wisdom and spiritual teachings'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-14b1e5d71f15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Peaceful Environment',
      title: 'Peaceful Environment',
      description: 'Our serene spiritual center and meditation space'
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Take a glimpse into our spiritual community and the peaceful moments we share together.
          </p>
        </motion.div>

        <div className="gallery-content">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <motion.div 
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="gallery-image-container">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <h4>{image.title}</h4>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div 
          className="gallery-stats"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Events Captured</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Memories Shared</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Moments of Joy</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close"
                onClick={closeLightbox}
              >
                <FaTimes />
              </button>
              
              <button 
                className="lightbox-nav lightbox-prev"
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>
              
              <button 
                className="lightbox-nav lightbox-next"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="lightbox-image"
              />
              
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
