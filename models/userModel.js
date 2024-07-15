const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

// Encrypt password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Update 'updated' field before saving
userSchema.pre('save', function (next) {
  this.updated = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);
