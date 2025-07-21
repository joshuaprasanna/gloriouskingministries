import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiX } from 'react-icons/fi';

const ChurchGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gallery');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="wonder-wrapper">
      <h2 className="wonder-title">👑 Glorious King Ministries – Divine Gallery</h2>

      <div className="wonder-gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="wonder-card"
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img
              src={`http://localhost:5000/uploads/${image.filename}`}
              alt={`gallery-${index}`}
              className="wonder-img"
            />
            <div className="wonder-overlay">
              ✨ “Praise the Lord, all you nations.” – Psalm 117:1
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {selectedImage && (
        <div className="wonder-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="wonder-lightbox-content">
            <FiX className="wonder-close" />
            <img
              src={`http://localhost:5000/uploads/${selectedImage.filename}`}
              alt="Zoom"
              className="wonder-lightbox-img"
            />
          </div>
        </div>
      )}

      {/* Full CSS */}
      <style>{`
        .wonder-wrapper {
          min-height: 100vh;
          padding: 60px 20px;
          background: radial-gradient(circle at top, #fdfcfb, #e2ebf0, #e8eaf6);
          overflow: hidden;
        }

        .wonder-title {
          text-align: center;
          font-size: 45px;
          font-weight: bold;
          margin-bottom: 60px;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .wonder-title::after {
          content: '';
          width: 140px;
          height: 5px;
          background: linear-gradient(to right, #ffc107, #ff5722);
          display: block;
          margin: 12px auto 0;
          border-radius: 5px;
          box-shadow: 0 0 20px #ff9800;
        }

        .wonder-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .wonder-card {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          backdrop-filter: blur(15px);
          overflow: hidden;
          position: relative;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          transform: scale(1);
          animation: floatIn 1s ease forwards;
          transition: transform 0.4s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .wonder-card:hover {
          transform: scale(1.05) rotateZ(-0.5deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .wonder-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 18px 18px 0 0;
          transition: transform 0.4s ease;
        }

        .wonder-card:hover .wonder-img {
          transform: scale(1.06);
        }

        .wonder-overlay {
          position: absolute;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          width: 100%;
          padding: 12px;
          font-style: italic;
          font-size: 14px;
          text-align: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .wonder-card:hover .wonder-overlay {
          opacity: 1;
        }

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Lightbox */
        .wonder-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.92);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .wonder-lightbox-content {
          position: relative;
          max-width: 95%;
          max-height: 90%;
          animation: zoomIn 0.4s ease;
        }

        .wonder-lightbox-img {
          width: 100%;
          max-height: 85vh;
          border-radius: 16px;
          box-shadow: 0 0 40px #fff;
        }

        .wonder-close {
          position: absolute;
          top: -35px;
          right: -10px;
          color: #fff;
          font-size: 32px;
          cursor: pointer;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ChurchGallery;
