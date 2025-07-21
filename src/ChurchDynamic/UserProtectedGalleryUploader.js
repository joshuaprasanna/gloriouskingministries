// src/UserProtectedGalleryUploader.js
import React, { useState } from 'react';
import axios from 'axios';

const UserProtectedGalleryUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('userToken');
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(`Upload success: ${res.data.path}`);
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div>
      <h2>User Gallery Upload</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default UserProtectedGalleryUploader;
