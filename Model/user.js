const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  age: Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);