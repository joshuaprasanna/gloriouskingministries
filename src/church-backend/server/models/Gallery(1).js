const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', GallerySchema);
