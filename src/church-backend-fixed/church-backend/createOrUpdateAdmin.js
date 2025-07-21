const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Admin = require('./models/Admin'); // adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const username = 'admin';
    const plainPassword = 'admin123';
    const email = 'gloriouskingministries@gmail.com'; // Email must be unique

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const updatedAdmin = await Admin.findOneAndUpdate(
      { email }, // Match by email
      { username, password: hashedPassword }, // Update these fields
      { upsert: true, new: true } // Create if not found
    );

    console.log('✅ Admin created or updated:', updatedAdmin);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ MongoDB error:', err);
  });
