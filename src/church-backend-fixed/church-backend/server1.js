const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
  },
});
const upload = multer({ storage });

// Mongoose schema
const gallerySchema = new mongoose.Schema({
  filename: String,
});
const Gallery = mongoose.model('Gallery', gallerySchema);

// Routes

// GET all gallery images
app.get('/api/gallery', async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching gallery' });
  }
});

// POST image upload
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const newImage = new Gallery({ filename: req.file.filename });
    await newImage.save();
    res.json({ message: 'Image uploaded successfully', filename: req.file.filename });
  } catch (err) {a
    res.status(500).json({ message: 'Upload failed', error: err });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
