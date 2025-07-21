// src/ChurchDynamic/ChurchUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChurchUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      await axios.post('http://localhost:5000/api/upload', formData);
      setMessage('✅ Upload successful! Redirecting...');
      setTimeout(() => navigate('/church/gallery'), 1500); // Redirect after 1.5 seconds
    } catch (err) {
      setMessage('❌ Upload failed.');
      console.error(err);
    }
  };

  const styles = {
    container: {
      padding: '40px',
      background: 'linear-gradient(to bottom right, #ffe0f0, #d0c4ff)',
      borderRadius: '30px',
      maxWidth: '600px',
      margin: '60px auto',
      boxShadow: '0 25px 35px rgba(0,0,0,0.3)',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#6a1b9a',
      marginBottom: '30px',
      fontWeight: 'bold',
      textShadow: '1px 1px 3px #999',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
    },
    input: {
      padding: '12px 18px',
      fontSize: '16px',
      borderRadius: '10px',
      border: '2px solid #7e57c2',
      backgroundColor: '#fff',
      width: '100%',
    },
    button: {
      padding: '12px 30px',
      fontSize: '16px',
      backgroundColor: '#7b1fa2',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    message: {
      textAlign: 'center',
      color: '#00695c',
      fontWeight: 'bold',
      marginTop: '20px',
    },
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={styles.heading}>📤 Upload to Church Gallery</h2>
      <form onSubmit={handleUpload} style={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Upload Image
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </motion.div>
  );
};

export default ChurchUpload;
