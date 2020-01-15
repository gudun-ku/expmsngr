const mongoose = require('mongoose');

const smsProfileSchema = new mongoose.Schema({
  messageCost: {
    type: Number,
    default: 1.0,
    required: [true, 'SMS profile must have a message cost']
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

const SMSProfile = mongoose.model('SMSProfile', smsProfileSchema);

module.exports = SMSProfile;
