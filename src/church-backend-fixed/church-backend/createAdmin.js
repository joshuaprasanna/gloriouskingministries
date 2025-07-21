const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Admin = require('./models/Admin'); // adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const username = 'admin';
    const plainPassword = 'admin123';
    const email = 'gloriouskingministries@gmail.com'; // ✅ Add a valid email

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newAdmin = new Admin({
      username,
      password: hashedPassword,
      email, // ✅ Include email here
    });

    await newAdmin.save();
    console.log('✅ Admin created: username=admin, password=admin123');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Error connecting to MongoDB:', err);
  });
