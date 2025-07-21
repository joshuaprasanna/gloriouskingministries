import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img3 from './yohan3.jpeg';
import img4 from './bapt.jpeg';
import img5 from './comm.jpeg';
import img6 from './pray.jpeg';
import img7 from './cel.jpeg';
import img8 from './bap2.jpeg';
import img9 from './yot.jpeg';
import img10 from './cel2.jpeg';
import img11 from './wor.jpeg';

const galleryData = [
  {
    title: "Sunday Worship",
    description: "A powerful time of praise, worship, and the Word.",
    images: [img11]
  },
  {
    title: "Youth Fellowship",
    description: "Energetic gathering for teens and young adults.",
    images: [img3, img9]
  },
  {
    title: "Baptism Ceremony",
    description: "Public declaration of faith in Jesus Christ.",
    images: [img4, img8]
  },
  {
    title: "Christmas Celebration",
    description: "Joyful celebration of the birth of Christ.",
    images: [img7, img10]
  },
  {
    title: "Community Service",
    description: "Serving food and essentials to the needy.",
    images: [img5]
  },
  {
    title: "Prayer Meeting",
    description: "United in prayer for healing, peace, and revival.",
    images: [img6]
  }
];

const categories = ["All", ...new Set(galleryData.map(item => item.title))];

const ChurchStaticGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All"
    ? galleryData
    : galleryData.filter(item => item.title === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&family=Pacifico&family=Orbitron:wght@600&display=swap');

        .gallery-container {
          padding: 3rem 2rem;
          background: linear-gradient(-45deg, #f3e5f5, #d0f0f6, #fef9d7, #e1eec3);
          background-size: 400% 400%;
          animation: backgroundShift 20s ease infinite;
          min-height: 100vh;
          font-family: 'Roboto Slab', serif;
        }

        @keyframes backgroundShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gallery-title {
          text-align: center;
          font-size: 3.5rem;
          font-family: 'Orbitron', sans-serif;
          color: #2d3436;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.25);
          margin-bottom: 2rem;
          letter-spacing: 3px;
        }

        .filter-buttons {
          text-align: center;
          margin-bottom: 2rem;
        }

        .filter-buttons button {
          margin: 0.3rem;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          background: #6c5ce7;
          color: white;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .filter-buttons button:hover,
        .filter-buttons button.active {
          background: #00cec9;
          transform: scale(1.05);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .gallery-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .gallery-card:hover {
          transform: scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .image-row {
          display: flex;
          overflow-x: auto;
          gap: 0.8rem;
          padding: 0.5rem;
          scrollbar-width: none;
        }

        .image-row::-webkit-scrollbar {
          display: none;
        }

        .gallery-img {
          height: 170px;
          border-radius: 12px;
          flex-shrink: 0;
          object-fit: cover;
          transition: transform 0.4s ease, box-shadow 0.3s ease;
        }

        .gallery-img:hover {
          transform: scale(1.1) rotate(1deg);
          box-shadow: 0 0 20px rgba(255, 105, 180, 0.4);
        }

        .gallery-info {
          padding: 1.3rem 1rem;
          text-align: center;
        }

        .gallery-info h3 {
          color: #6c3483;
          font-size: 1.6rem;
          margin-bottom: 0.4rem;
        }

        .gallery-info p {
          font-size: 1.05rem;
          color: #555;
          font-family: 'Pacifico', cursive;
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

        .modal-image {
          max-width: 95%;
          max-height: 90vh;
          border-radius: 16px;
          box-shadow: 0 16px 60px rgba(255,255,255,0.3);
          animation: pop 0.5s ease;
        }

        @keyframes pop {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close-button {
          position: absolute;
          top: 25px;
          right: 35px;
          font-size: 3rem;
          color: #fff;
          cursor: pointer;
          font-weight: bold;
        }

        .close-button:hover {
          color: #ff7675;
        }

        @media (max-width: 768px) {
          .gallery-title {
            font-size: 2.5rem;
          }
          .gallery-img {
            height: 140px;
          }
        }
      `}</style>

      <div className="gallery-container">
        <motion.h1
          className="gallery-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✨ Church Gallery
        </motion.h1>

        {/* FILTER BUTTONS */}
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="gallery-grid">
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                className="gallery-card"
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="image-row">
                  {item.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${item.title} ${i + 1}`}
                      className="gallery-img"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(img);
                      }}
                    />
                  ))}
                </div>
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* MODAL IMAGE PREVIEW */}
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
                className="modal-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <span className="close-button" onClick={() => setSelectedImage(null)}>×</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ChurchStaticGallery;
