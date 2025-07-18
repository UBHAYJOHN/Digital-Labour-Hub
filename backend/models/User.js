const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String, // 'worker' or 'employer'
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
