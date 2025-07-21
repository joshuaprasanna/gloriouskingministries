import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImg from './download.jpeg';
import contactImg from './download1.jpg';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('⏳ Sending...');
    try {
     const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response from server");
      }

      const data = await res.json();
      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (err) {
      setStatus('❌ Server error. Try again later.');
      console.error(err);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@700&display=swap');

        .contact-container {
          font-family: 'Open Sans', sans-serif;
          background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 4rem 2rem;
          color: #fff;
          min-height: 100vh;
          backdrop-filter: brightness(0.6);
        }

        .contact-box {
          background: rgba(0, 0, 0, 0.75);
          border-radius: 20px;
          max-width: 1100px;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .contact-left, .contact-right {
          flex: 1 1 300px;
          padding: 3rem;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #fcd34d;
          margin-bottom: 1rem;
        }

        .contact-info {
          font-size: 1.1rem;
          line-height: 2rem;
        }

        .contact-info div {
          margin: 1rem 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-form {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input, .contact-form textarea {
          padding: 10px 15px;
          border-radius: 10px;
          border: none;
          outline: none;
          font-size: 1rem;
        }

        .contact-form button {
          padding: 12px;
          background: #fcd34d;
          color: #000;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s ease;
        }

        .contact-form button:hover {
          background: #eab308;
        }

        .contact-right img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          transform: perspective(800px) rotateY(0deg);
          transition: transform 0.5s ease;
        }

        .contact-right img:hover {
          transform: perspective(800px) rotateY(12deg) scale(1.04);
        }

        .status-message {
          margin-top: 10px;
          font-weight: bold;
          color: #fcd34d;
        }

        @media (max-width: 768px) {
          .contact-box {
            flex-direction: column;
          }
          .contact-right img {
            margin-top: 2rem;
          }
        }
      `}</style>

      <div className="contact-container">
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side Content */}
          <div className="contact-left">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-info">
              <div><FaMapMarkerAlt color="#fcd34d" /> <span><strong>Glorious King Ministries</strong><br />
                H. No. 9-62/1, Riksha Colony,<br />
                Sarapaka, Bhadradri Kothagudem (DT),<br />
                Telangana, India - 507128</span></div>

              <div><FaPhoneAlt color="#fcd34d" /> <span>+91 9705358623</span></div>
              <div><FaEnvelope color="#fcd34d" /> <span>gloriouskingministries@gmail.com</span></div>
            </div>

            {/* Form Starts Here */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Your Message" rows="4" value={form.message} onChange={handleChange} required />
              <button type="submit">Send Message</button>
              {status && <div className="status-message">{status}</div>}
            </form>
          </div>

          {/* Right Side Image */}
          <div className="contact-right">
            <img src={contactImg} alt="Church contact" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
