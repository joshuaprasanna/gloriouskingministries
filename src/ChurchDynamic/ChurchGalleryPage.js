// src/Church/ChurchGalleryPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const ChurchGalleryPage = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/gallery')
      .then(res => setImages(res.data))
      .catch(err => console.error('Failed to fetch gallery:', err));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Pacifico&display=swap');

        .gallery-bg {
          background: linear-gradient(-45deg, #f5f7fa, #c3cfe2, #d4fc79, #96e6a1);
          background-size: 400% 400%;
          animation: gradientFlow 18s ease infinite;
          min-height: 100vh;
          padding: 4rem 2rem;
          font-family: 'Orbitron', sans-serif;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gallery-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 2.5rem;
          color: #2d3436;
          text-shadow: 1px 2px 10px rgba(0,0,0,0.2);
          letter-spacing: 2px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .gallery-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .gallery-card:hover {
          transform: scale(1.04);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }

        .gallery-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-bottom: 1px solid #ddd;
          transition: transform 0.3s ease;
        }

        .gallery-img:hover {
          transform: scale(1.05);
        }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-img {
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 20px;
          box-shadow: 0 0 40px rgba(255,255,255,0.3);
        }

        .close-button {
          position: absolute;
          top: 30px;
          right: 40px;
          font-size: 3rem;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
        }

        .close-button:hover {
          color: #ff7675;
        }

        @media (max-width: 768px) {
          .gallery-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="gallery-bg">
        <motion.h1
          className="gallery-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📸 Glorious Gallery
        </motion.h1>

        {images.length === 0 ? (
          <p className="text-center text-gray-600">No images uploaded yet.</p>
        ) : (
          <div className="gallery-grid">
            <AnimatePresence>
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className="gallery-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedImage(`http://localhost:5000/uploads/${img.filename}`)}
                >
                  <img
                    src={`http://localhost:5000/uploads/${img.filename}`}
                    alt={`gallery-img-${index}`}
                    className="gallery-img"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* MODAL PREVIEW */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal-overlay"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={selectedImage}
                alt="enlarged-img"
                className="modal-img"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
              />
              <span className="close-button" onClick={() => setSelectedImage(null)}>×</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ChurchGalleryPage;
