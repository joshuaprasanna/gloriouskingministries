const mongoose = require('mongoose');

const GalleryImageSchema = new mongoose.Schema({
  filename: String,
  path: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GalleryImage', GalleryImageSchema);
