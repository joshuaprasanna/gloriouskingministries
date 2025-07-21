import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [gallery, setGallery] = useState([]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setUploadStatus('');
    setFile(null);
    setPreview(null);
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async (endpoint) => {
    if (!file) {
      setUploadStatus('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(`http://localhost:5000/api/${endpoint}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setUploadStatus(`${endpoint.replace('-', ' ')} uploaded successfully!`);
      setFile(null);
      setPreview(null);
      if (endpoint === 'gallery') fetchGallery();
    } catch (err) {
      if (err.response?.status === 403) {
        setUploadStatus('Forbidden: Invalid or expired token');
      } else if (err.response?.status === 401) {
        setUploadStatus('Unauthorized: Please login again');
      } else {
        setUploadStatus('Upload failed. Check file and try again.');
      }
      console.error(err);
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/gallery');
      setGallery(res.data);
    } catch (err) {
      console.error('Gallery fetch failed:', err);
    }
  };

  useEffect(() => {
    if (activeSection === 'Gallery Upload') fetchGallery();
  }, [activeSection]);

  const sectionConfig = {
    'Gallery Upload': 'gallery',
    'Slideshow Upload': 'slideshow',
    'Marquee Message': 'marquee',
    'Sermons Upload': 'sermons',
    'Upcoming Events': 'events',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Glorious King Ministries - Admin Dashboard</h1>
      <div style={styles.sidebar}>
        {Object.keys(sectionConfig).map((item) => (
          <button
            key={item}
            style={{
              ...styles.sidebarButton,
              backgroundColor: activeSection === item ? '#5b2c6f' : '#7d3c98',
            }}
            onClick={() => handleSectionClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeSection && (
          <div style={styles.formBox}>
            <h2>{activeSection}</h2>
            <input type="file" accept="*/*" onChange={handleFileChange} style={styles.input} />
            {preview && <img src={preview} alt="Preview" style={styles.preview} />}
            <button
              style={styles.uploadBtn}
              onClick={() => handleUpload(sectionConfig[activeSection])}
            >
              Upload
            </button>
            <p>{uploadStatus}</p>
          </div>
        )}

        {activeSection === 'Gallery Upload' && (
          <div>
            <h3>Gallery Images</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {gallery.map((img) => (
                <div key={img._id} style={{ width: '200px', border: '1px solid #ccc' }}>
                  <img
                    src={`http://localhost:5000${img.url}`}
                    alt="Gallery"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #f8f9fa, #e0e0f8)',
  },
  title: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#4a148c',
  },
  sidebar: {
    width: '240px',
    background: '#7d3c98',
    padding: '80px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  sidebarButton: {
    padding: '12px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  content: {
    flex: 1,
    padding: '120px 40px 40px',
    position: 'relative',
  },
  formBox: {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px',
  },
  input: {
    marginTop: '20px',
    marginBottom: '20px',
    padding: '12px',
    borderRadius: '8px',
    width: '100%',
    border: '1px solid #ccc',
  },
  preview: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'contain',
    marginBottom: '15px',
    borderRadius: '10px',
  },
  uploadBtn: {
    padding: '12px 24px',
    backgroundColor: '#5b2c6f',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default AdminDashboard;
