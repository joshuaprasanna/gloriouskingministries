import React from 'react';
import { motion } from 'framer-motion';

const sermons = [
  {
    title: "The Power of the Holy Spirit",
    description: "Experience the move of the Holy Spirit in your daily walk.",
    url: "https://www.youtube-nocookie.com/embed/Z1FBaQHU4iI?si=HTyn5mObKkPEforJ"
  },
  {
    title: "Faith That Moves Mountains",
    description: "Learn how to activate your faith in challenging times.",
    url: "https://www.youtube-nocookie.com/embed/EVBTI1XVZvQ?si=OgzA-b25UWGIi8Lb"
  },
  {
    title: "Walking in God’s Purpose",
    description: "Discover your divine purpose in Christ.",
    url:"https://www.youtube.com/embed/DKgzn_-a7pk?si=bKiVEoyZlrQccPwN"
  }
];

const Sermons = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

        .sermons-wrapper {
          min-height: 100vh;
          background: linear-gradient(to bottom right,rgb(74, 74, 153),rgb(82, 8, 92));
          padding: 4rem 2rem;
          font-family: 'Raleway', sans-serif;
          color: #fff;
        }

        .sermons-title {
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #ffe600;
          text-shadow: 0 0 10px rgba(255, 230, 0, 0.5);
        }

        .sermon-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2.5rem;
        }

        .sermon-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          width: 330px;
          padding: 1.5rem;
          backdrop-filter: blur(6px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sermon-box:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }

        .sermon-box h3 {
          color: #fbc531;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .sermon-box p {
          color: #ddd;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .sermon-box iframe {
          width: 100%;
          height: 190px;
          border: none;
          border-radius: 12px;
        }

        @media (max-width: 768px) {
          .sermons-title {
            font-size: 2.2rem;
          }

          .sermon-box {
            width: 90%;
          }
        }
      `}</style>

      <div className="sermons-wrapper">
        <h1 className="sermons-title">🔥 Sermons That Stir the Spirit</h1>
        <div className="sermon-grid">
          {sermons.map((sermon, index) => (
            <motion.div
              className="sermon-box"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{sermon.title}</h3>
              <p>{sermon.description}</p>
              <iframe
                src={sermon.url}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sermons;
