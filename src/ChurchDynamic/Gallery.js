// src/ChurchDynamic/Gallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/gallery');
        setImages(res.data);
      } catch (err) {
        console.error('Failed to fetch gallery images:', err);
      }
    };
    fetchImages();
  }, []);

  const styles = {
    galleryWrapper: {
      padding: '30px',
      background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
      borderRadius: '20px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      marginTop: '20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
    },
    card: {
      background: '#fff',
      borderRadius: '15px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.8rem',
      color: '#4A148C',
      marginBottom: '15px',
      textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
    },
  };

  return (
    <motion.div
      style={styles.galleryWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={styles.title}>📷 Uploaded Church Images</h2>
      <div style={styles.grid}>
        {images.map((img) => (
          <motion.div
            key={img._id}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={`http://localhost:5000${img.path}`}
              alt="Church Event"
              style={styles.image}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
