// routes/galleryRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// POST: Upload image
router.post('/upload', upload.single('image'), (req, res) => {
  const { title, description } = req.body;
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const imageUrl = '/uploads/' + req.file.filename;

  res.status(201).json({ title, description, imageUrl });
});

// GET: Get all (static for now)
router.get('/all', (req, res) => {
  // Example static data
  res.json([
    {
      title: "Sample",
      description: "Sample Image",
      imageUrl: "/uploads/sample.jpg"
    }
  ]);
});

module.exports = router;
