
import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/upload', formData);
      setImage(null);
      window.location.reload();
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadForm;
