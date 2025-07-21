// src/Church/ChurchStaticHome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "./glory.jpeg";
import img1 from './yohan.jpeg';
import img2 from './yohan2.jpeg';
import img3 from './yohan3.jpeg';

const ChurchStaticHome = () => {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap');

        .church-home {
          font-family: 'Roboto', sans-serif;
          background: radial-gradient(circle at top left, #e3ffe7, #d9e7ff);
          padding: 2rem 1rem;
          min-height: 100vh;
        }

        .church-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 2rem;
        }

        .church-logo {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .church-title-centered {
          text-align: center;
          font-size: 3rem;
          font-family: 'Playfair Display', serif;
          color: #3a0ca3;
        }

        .marquee-bar {
          background: linear-gradient(90deg, #120078, #9d4edd);
          color: white;
          padding: 0.8rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-bar span {
          display: inline-block;
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .slider {
          max-width: 900px;
          height: 500px;
          margin: auto;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .slider-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-buttons {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
        }

        .slider-buttons button {
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 0.5rem 1rem;
          font-size: 1.5rem;
          border-radius: 8px;
          cursor: pointer;
        }

        .church-banner {
          text-align: center;
          background: linear-gradient(60deg,#182053,#c4bbcc,#182153);
          color: white;
          padding: 3rem 2rem;
          border-radius: 30px;
          margin: 3rem auto;
          max-width: 960px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }

        .btn-discover {
          background: #fff;
          color: #6c5ce7;
          padding: 0.9rem 1.6rem;
          border-radius: 50px;
          font-weight: bold;
          text-decoration: none;
        }

        .church-sections {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }

        .section-card {
          background: white;
          width: 300px;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        /* Contact Us Section */
        .contact-section {
          background: linear-gradient(to right, #e8eaf6, #e1bee7);
          padding: 3rem 2rem;
          border-radius: 24px;
          margin: 4rem auto 2rem;
          max-width: 960px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .contact-section h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #4a148c;
          margin-bottom: 1rem;
        }

        .contact-details {
          text-align: center;
          font-size: 1.1rem;
          line-height: 2;
          color: #333;
        }

        .contact-details a {
          color: #6a1b9a;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-details a:hover {
          text-decoration: underline;
        }
          .footer-credit {
  margin-top: 4rem;
  padding: 1.5rem 0;
  text-align: center;
  background: linear-gradient(to right, #ede7f6, #e1bee7, #ede7f6);
  border-top: 2px solid rgba(0,0,0,0.05);
  border-radius: 16px;
  box-shadow: inset 0 1px 4px rgba(0,0,0,0.1);
}

.glow-text {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(to right,rgb(60, 42, 141),rgb(29, 22, 11),rgb(27, 40, 154));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowPulse 2.5s ease-in-out infinite;
}

@keyframes glowPulse {
  0% { text-shadow: 0 0 5px #6a1b9a88; }
  50% { text-shadow: 0 0 15px #ab47bcaa; }
  100% { text-shadow: 0 0 5pxrgba(143, 64, 27, 0.53); }
}

      `}</style>

      <div className="church-home">
        <div className="church-header">
          <img src={logo} alt="Glorious King Ministries Logo" className="church-logo" />
          <h1 className="church-title-centered">Glorious King Ministries</h1>
        </div>

        <div className="marquee-bar">
          <span>🔥 Join us for Sunday Worship - 10:00 AM | Bible Study - Wed 6:30 PM | Jesus is Lord 🙏</span>
        </div>

        <div className="slider">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current}`}
            className="slider-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="slider-buttons">
            <button onClick={prevSlide}>⟵</button>
            <button onClick={nextSlide}>⟶</button>
          </div>
        </div>

        <motion.div className="church-banner" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1>Welcome to Glorious King Ministries</h1>
          <p>We are here to spread the love of Christ, serve the needy, and glorify the King of Kings.</p>
          <Link to="/churchstatic/about" className="btn-discover">Testimony Of Founder</Link>
        </motion.div>

        <div className="church-sections">
          {[{
            title: 'Our Ministries',
            desc: 'Empowering youth, women, families through biblical foundations.',
            link: '/churchstatic/ministries'
          }, {
            title: 'Upcoming Events',
            desc: 'Don’t miss our worship nights, prayer meetings and celebrations.',
            link: '/churchstatic/events'
          }, {
            title: 'Photo Gallery',
            desc: 'View the powerful moments we’ve shared as one church body.',
            link: '/churchstatic/gallery'
          }, {
            title: 'Sermons',
            desc: 'Watch, listen or read life-transforming messages from our pastors.',
            link: '/churchstatic/sermons'
          }].map((item, index) => (
            <motion.div className="section-card" key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={item.link}>Explore →</Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Us Section */}
      {/* Contact Us Section */}
<motion.div className="contact-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
  <h2>Contact Us</h2>
  <div className="contact-details">
    <p><strong>Pastor:</strong> Pr. Yohan</p>
    <p><strong>Ministry:</strong> Glorious King Ministries</p>
    <p><strong>Address:</strong> H.No. 9-62/1, Riksha Colony, Sarapaka, Bhurgampahad (Mandal),<br />Bhadradri Kothagudem (District), Telangana, India - <strong>507128</strong></p>
    <p><strong>Email:</strong> <a href="mailto:gloriouskingministries@gmail.com">gloriouskingministries@gmail.com</a></p>
    <p><strong>Phone:</strong> <a href="tel:+919705358623">+91 97053 58623</a></p>
  </div>
</motion.div>
<div className="footer-credit">
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <span className="glow-text">✨ Designed & Developed by <strong>JOSHUA</strong> ✨</span>
  </motion.span>
</div>
      </div>
    </>
  );
};

export default ChurchStaticHome;
