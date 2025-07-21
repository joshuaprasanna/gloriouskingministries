import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      setMessage('✅ Upload successful!');
      window.location.reload();
    } catch (err) {
      console.error(err);
      setMessage('❌ Upload failed');
    }
  };

  return (
    <form onSubmit={handleUpload} style={{ marginBottom: '30px', textAlign: 'center' }}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" style={{ marginLeft: '10px' }}>Upload</button>
      <div>{message}</div>
    </form>
  );
};

export default UploadForm;
