const mongoose = require('mongoose');

const emailProfileSchema = new mongoose.Schema({
  messageCost: {
    type: Number,
    default: 1.0,
    required: [true, 'Email profile must have a message cost']
  },
  totalSum: {
    type: Number,
    default: 0.0
  },
  totalCount: {
    type: Number,
    default: 0
  }
});

const EmailProfile = mongoose.model('EmailProfile', emailProfileSchema);

module.exports = EmailProfile;
