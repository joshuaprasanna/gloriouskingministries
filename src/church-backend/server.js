// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load .env
dotenv.config();

// App setup
const app = express();
app.use(cors());
app.use(express.json());

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads folder if not exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Serve static files from uploads
app.use('/uploads', express.static('uploads'));

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Upload route
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    res.status(200).json({
      message: 'Upload successful',
      path: `/uploads/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
});


const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Church backend running...');
});

// Models & Mail
const Message = require('./models/Message');
const sendMail = require('./mail');

// POST: contact form
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send Email Notification
    await sendMail({ name, email, message });

    res.status(201).json({ success: true, message: 'Message received and email sent!' });
  } catch (error) {
    console.error('Save message error:', error);
    res.status(500).json({ success: false, message: 'Failed to save message or send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
