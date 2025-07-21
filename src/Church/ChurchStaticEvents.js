// src/Church/ChurchStaticEvents.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const events = [
  {
    icon: '🍞',
    title: 'Holy Communion',
    details: 'Every Month – First Sunday',
    date: '2025-08-03T10:00:00',
    color: '#6a00f4',
  },
  {
    icon: '🧼',
    title: 'Purification Services',
    details: '2 Days Before First Sunday',
    date: '2025-08-01T18:00:00',
    color: '#8e44ad',
  },
  {
    icon: '🔥',
    title: 'Youth Fellowship',
    details: 'Every Month – Special Gathering',
    date: '2025-08-10T17:00:00',
    color: '#e67e22',
  },
  {
    icon: '👩‍🦰',
    title: 'Women Fellowship',
    details: 'Every Day at 10:00 AM',
    date: '2025-07-22T10:00:00',
    color: '#fd79a8',
  },
  {
    icon: '🎉',
    title: 'Anniversary Meeting',
    details: 'Every Year on 21st November',
    date: '2025-11-21T17:00:00',
    color: '#00cec9',
  },
  {
    icon: '⛪',
    title: 'Sunday Worship Services',
    details: 'Every Sunday at 10:00 AM',
    date: '2025-07-27T10:00:00',
    color: '#0984e3',
  },
  {
    icon: '🧒',
    title: 'Children Ministry',
    details: 'Every Sunday at 10:00 AM',
    date: '2025-07-27T10:00:00',
    color: '#fab1a0',
  },
  {
    icon: '🙏',
    title: 'Fasting Prayers',
    details: 'Every Saturday at 6:00 AM',
    date: '2025-07-26T06:00:00',
    color: '#2d3436',
  },
  {
    icon: '🎄',
    title: 'Christmas Gospel Meetings',
    details: 'Special Events All December',
    date: '2025-12-01T18:00:00',
    color: '#d63031',
  },
  {
    icon: '🙌',
    title: 'Thanksgiving Prayer Meeting',
    details: 'Every Month – Praise & Prayer',
    date: '2025-08-05T18:00:00',
    color: '#ffeaa7',
  },
];

const ChurchStaticEvents = () => {
  const [timeLeft, setTimeLeft] = useState('');

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      const next = new Date(events[0].date);
      const now = new Date();
      const diff = next - now;
      if (diff <= 0) {
        setTimeLeft("It's happening now!");
        clearInterval(interval);
        return;
      }
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

        .events-section {
          font-family: 'Montserrat', sans-serif;
          position: relative;
          padding: 6rem 2rem;
          overflow: hidden;
          min-height: 100vh;
          color: white;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 30%, #4b0082, #12002f);
          animation: moveBackground 20s linear infinite;
          z-index: -1;
        }

        @keyframes moveBackground {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-25%, -25%) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        .events-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #ffd700;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
        }

        .countdown {
          text-align: center;
          font-size: 1.3rem;
          color: #d1d1ff;
          margin-bottom: 3rem;
        }

        .event-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          margin: 1.5rem auto;
          max-width: 600px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
          border-left: 10px solid;
          transition: transform 0.3s ease;
        }

        .event-card:hover {
          transform: scale(1.03);
        }

        .event-icon {
          font-size: 2.8rem;
          margin-bottom: 0.8rem;
        }

        .event-title {
          font-size: 1.7rem;
          font-weight: bold;
          margin-bottom: 0.4rem;
        }

        .event-details {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .event-actions a {
          display: inline-block;
          margin: 0.5rem 1rem 0 0;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 600;
          color: white;
          background: #6a00f4;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .event-actions a:hover {
          background: #4a00c4;
        }

        @media (max-width: 768px) {
          .events-title {
            font-size: 2rem;
          }
          .event-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="events-section">
        <div className="animated-bg"></div>

        <motion.h2
          className="events-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📅 Upcoming Events
        </motion.h2>

        <div className="countdown">
          ⏳ <strong>Next Event Countdown:</strong> {timeLeft}
        </div>

        {events.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            style={{ borderLeftColor: event.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="event-icon">{event.icon}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-details">{event.details}</div>
            <div className="event-actions">
              <a href={event.link} target="_blank" rel="noreferrer">➕ Add to Calendar</a>
              <a href={`mailto:gloriouskingministries@gmail.com?subject=RSVP for ${event.title}`} target="_blank">🔔 RSVP</a>
            </div>
          </motion.div>
        ))}

        {/* Background Music */}
        <audio autoPlay loop hidden>
          <source src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
};

export default ChurchStaticEvents;
