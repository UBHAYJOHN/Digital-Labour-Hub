// backend/models/Worker.js

const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skill: String,
  location: String,
  availability: { type: String, default: "Available" }
});

module.exports = mongoose.model("Worker", workerSchema);
