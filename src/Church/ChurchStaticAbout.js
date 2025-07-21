// src/Church/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import backgroundImg from './download.jpeg';
import testimonyPhoto from './testimony.jpeg';

const AboutUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans&display=swap');

        .about-container {
          font-family: 'Open Sans', sans-serif;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 5rem 2rem;
          color: #ffffff;
          min-height: 100vh;
          backdrop-filter: brightness(0.6);
        }

        .about-content {
          background: rgba(0, 0, 0, 0.75);
          padding: 4rem 3rem;
          border-radius: 20px;
          max-width: 980px;
          margin: auto;
          box-shadow: 0 15px 45px rgba(0,0,0,0.5);
          position: relative;
        }

        .about-title {
          font-family: 'Merriweather', serif;
          font-size: 3rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #facc15;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.9;
          text-align: justify;
          color: #f1f5f9;
        }

        .testimony-photo {
          display: block;
          margin: 2rem auto;
          width: 300px;
          height: 450px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.3);
          transition: all 0.6s ease;
          transform: perspective(1000px);
        }

        .testimony-photo:hover {
          transform: perspective(1000px) rotateY(10deg) rotateX(6deg) scale(1.05);
          box-shadow: 0 40px 80px rgba(255, 255, 255, 0.5);
          filter: brightness(1.1);
        }

        .scripture-box {
          border-left: 4px solid #facc15;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #e2e8f0;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2rem;
          }
          .testimony-photo {
            width: 90%;
            height: auto;
          }
        }
      `}</style>

      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="about-title">About Pastor Yohanu</h1>
          <img src={testimonyPhoto} alt="Pastor Yohanu" className="testimony-photo" />
          <p className="about-text">
            Praise the Lord! Greetings in the matchless name of our Lord Jesus Christ. I’m <strong>Pastor Yohanu</strong>, founder of <strong>Glorious King Ministries</strong>, serving in <strong>Sarapaka</strong>, near <strong>Bhadrachalam</strong>, Telangana, India.
            <br /><br />
            Though raised in a Roman Catholic family, I lived far from God’s holiness. 
            <div className="scripture-box">
              “Don’t you know that you yourselves are God’s temple and that God’s Spirit dwells in you?”<br />
              <strong>— 1 Corinthians 3:16</strong>
            </div>
            In 1996, I fell seriously ill due to witchcraft. Neither medicine nor rest helped. But fervent prayer and the anointing of the Holy Spirit delivered me. That moment, I surrendered my life fully to Jesus Christ.
            <br /><br />
            I was baptized and later married a faithful servant of God. Together, we committed our lives to full-time ministry. We have been blessed with two daughters and a burden to serve the lost, the sick, and the oppressed.
            <br /><br />
            Our vision is clear: To bring salvation to souls, healing to the broken, and glory to God through love and service.
            <br /><br />
            <strong>To God be all the glory. ✝️</strong>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
