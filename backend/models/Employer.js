// backend/models/Employer.js

const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  name: String,
  company: String,
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String
});

module.exports = mongoose.model("Employer", employerSchema);
