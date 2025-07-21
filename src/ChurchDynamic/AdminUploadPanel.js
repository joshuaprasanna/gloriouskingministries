import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ChurchUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Spinner delay on mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Redirect to login if no token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/admin/login');
  }, [navigate]);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage('❗ Please select a file.');

    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('✅ Upload successful! Redirecting...');
      setTimeout(() => navigate('/church/gallery'), 1500);
    } catch (err) {
      console.error(err);
      setMessage('❌ Upload failed. Are you logged in as admin?');
    }
  };

  if (loading) {
    return (
      <div style={styles.spinnerWrapper}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.sidebar}
      >
        <h2 style={styles.sidebarTitle}>Admin Panel</h2>
        <ul style={styles.menu}>
          <li onClick={() => setShowForm(true)}>📤 Upload Gallery Image</li>
          <li onClick={() => navigate('/church/gallery')}>🖼 View Gallery</li>
          <li onClick={() => navigate('/church')}>🏠 Home</li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.main}
      >
        <h1 style={styles.mainTitle}>Glorious King Ministries</h1>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={styles.uploadBox}
            >
              <form onSubmit={handleUpload} style={styles.form}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={styles.input}
                />
                <button type="submit" style={styles.button}>
                  Upload
                </button>
              </form>
              {message && <p style={styles.message}>{message}</p>}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// CSS styles
const styles = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #e3f2fd, #ede7f6)',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    background: '#4a148c',
    color: 'white',
    padding: '30px 20px',
    boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
  },
  sidebarTitle: {
    fontSize: '24px',
    marginBottom: '30px',
    fontWeight: 'bold',
    borderBottom: '2px solid #fff',
    paddingBottom: '10px',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  main: {
    flex: 1,
    padding: '60px',
    position: 'relative',
  },
  mainTitle: {
    fontSize: '2.8rem',
    color: '#6a1b9a',
    marginBottom: '40px',
    textAlign: 'center',
    textShadow: '1px 1px 2px #aaa',
  },
  uploadBox: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    maxWidth: '500px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px',
    borderRadius: '10px',
    border: '2px solid #7e57c2',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#7b1fa2',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  message: {
    marginTop: '15px',
    color: '#2e7d32',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  spinnerWrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom right, #ede7f6, #fff8e1)',
  },
};

// Spinner CSS
const spinnerStyle = document.createElement('style');
spinnerStyle.innerHTML = `
  .loader {
    border: 8px solid #f3e5f5;
    border-top: 8px solid #7b1fa2;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1.2s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

export default ChurchUpload;
