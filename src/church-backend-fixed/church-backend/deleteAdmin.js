const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Admin.deleteOne({ email: 'gloriouskingministries@gmail.com' });
    console.log("✅ Admin deleted.");
    mongoose.disconnect();
  })
  .catch(err => console.error("❌ Error:", err));
