// church-backend/routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const uploadsDir = path.join(__dirname, '..', 'uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Unable to read uploads folder' });
    }

    const imageFiles = files.filter(file =>
      ['.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file).toLowerCase())
    );

    const galleryData = imageFiles.map(filename => ({ filename }));
    res.json(galleryData);
  });
});

module.exports = router;
