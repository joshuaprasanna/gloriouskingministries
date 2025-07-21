// src/Church/ChurchUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ChurchUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.image) {
      setMessage('Please fill all fields and select an image.');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('image', formData.image);

    try {
      const res = await axios.post('http://localhost:5000/api/gallery/upload', data);
      setMessage(res.data.message || 'Upload successful!');
      setFormData({ title: '', description: '', image: null });
    } catch (err) {
      setMessage('Upload failed.');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>📸 Upload to Church Gallery</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </div>
        <div>
          <label>Select Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            style={{ marginBottom: '1rem' }}
          />
        </div>
        <button type="submit" style={{
          backgroundColor: '#6c5ce7',
          color: '#fff',
          padding: '0.7rem 1.5rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Upload
        </button>
      </form>
      {message && <p style={{ marginTop: '1rem', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default ChurchUpload;
