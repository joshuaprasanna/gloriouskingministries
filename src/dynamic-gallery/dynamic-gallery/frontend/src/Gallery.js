
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/images')
      .then(res => setImages(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="gallery">
      {images.map(img => (
        <img key={img._id} src={`http://localhost:5000${img.path}`} alt="Church" width="200" />
      ))}
    </div>
  );
}

export default Gallery;
