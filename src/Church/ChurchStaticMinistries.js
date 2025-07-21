import React from 'react';
import { motion } from 'framer-motion';
import youthImg from './youth.jpeg';
import womenImg from './women.jpg';
import kidsImg from './kids.jpg';
import outreachImg from './outreach.jpg';

const ministries = [
  {
    title: 'Youth Ministry',
    description: 'Empowering young hearts with purpose, worship, and service.',
    verse: '“Let no one despise your youth...” – 1 Timothy 4:12',
    image: youthImg,
  },
  {
    title: 'Women’s Fellowship',
    description: 'Strengthening women through prayer and the Word.',
    verse: '“She is clothed with strength and dignity.” – Proverbs 31:25',
    image: womenImg,
  },
  {
    title: 'Children’s Ministry',
    description: 'Building strong foundations for future disciples.',
    verse: '“Let the little children come to me...” – Matthew 19:14',
    image: kidsImg,
  },
  {
    title: 'Outreach Ministry',
    description: 'Taking Christ’s love to the streets, homes, and hearts.',
    verse: '“Go into all the world and preach the gospel...” – Mark 16:15',
    image: outreachImg,
  },
];

const ChurchStaticMinistries = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans&display=swap');

        .ministries-wrapper {
          min-height: 100vh;
          padding: 5rem 2rem;
          background: linear-gradient(145deg, #f0f4ff, #e9ddff);
          background-image: url('https://www.transparenttextures.com/patterns/white-wall-3.png');
          font-family: 'Open Sans', sans-serif;
        }

        .ministries-heading {
          font-family: 'Josefin Sans', serif;
          font-size: 3.5rem;
          text-align: center;
          color: #4a148c;
          margin-bottom: 4rem;
          text-shadow: 1px 1px 12px rgba(0,0,0,0.15);
        }

        .ministries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ministry-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          position: relative;
          z-index: 1;
        }

        .ministry-card::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.4), transparent 60%);
          transform: scale(0.5);
          opacity: 0;
          transition: all 0.5s ease;
          z-index: 0;
        }

        .ministry-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .ministry-card:hover::before {
          transform: scale(1);
          opacity: 1;
        }

        .ministry-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-bottom: 3px solid #eee;
        }

        .ministry-info {
          padding: 1.6rem;
          text-align: center;
          z-index: 2;
          position: relative;
        }

        .ministry-info h3 {
          font-size: 1.7rem;
          color: #2e1065;
          margin-bottom: 0.7rem;
        }

        .ministry-info p {
          font-size: 1rem;
          color: #444;
          line-height: 1.7;
        }

        .verse {
          margin-top: 1rem;
          font-style: italic;
          font-size: 0.95rem;
          color: #7e22ce;
        }

        @media (max-width: 768px) {
          .ministries-heading {
            font-size: 2.3rem;
          }

          .ministry-image {
            height: 200px;
          }
        }
      `}</style>

      <div className="ministries-wrapper">
        <motion.h1
          className="ministries-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Ministries
        </motion.h1>

        <div className="ministries-grid">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              className="ministry-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={ministry.image} alt={ministry.title} className="ministry-image" />
              <div className="ministry-info">
                <h3>{ministry.title}</h3>
                <p>{ministry.description}</p>
                <p className="verse">{ministry.verse}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChurchStaticMinistries;
