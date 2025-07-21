const express = require('express');
const multer = require('multer');
const verifyToken = require('../middleware/auth'); // ✅ Correct import
const galleryController = require('../controllers/galleryController');
const path = require('path');

const router = express.Router();

// Multer setup for saving files in /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Routes
router.get('/', galleryController.getGallery);

// ✅ Admin-protected upload route
router.post('/upload', verifyToken, upload.single('image'), galleryController.uploadImage);

// ✅ Admin-protected delete route
router.delete('/:id', verifyToken, galleryController.deleteImage);

module.exports = router;
