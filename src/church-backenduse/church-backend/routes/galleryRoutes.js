const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Gallery = require('../models/Gallery');

// Make uploads directory if not exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// POST: Upload image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const image = new Gallery({
      title,
      description,
      imageUrl: `/uploads/${req.file.filename}`,
    });
    await image.save();
    res.status(200).json({ message: 'Upload successful', path: image.imageUrl });
  } catch (err) {
    console.error('Upload Error:', err);
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
});

// GET: Fetch all gallery images
router.get('/all', async (req, res) => {
  try {
    const galleryItems = await Gallery.find().sort({ _id: -1 });
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
