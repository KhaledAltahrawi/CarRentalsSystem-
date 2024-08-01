const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Car', carSchema);
