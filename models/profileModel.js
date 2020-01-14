const mongoose = require('mongoose');
const validator = require('validator');

// name, email, photo, password, passwordConfirm

// USER PROFILE SCHEMA (MODEL)
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    unique: true,
    required: [true, 'A profile must belong to a user']
  },
  registrationDate: {
    type: Date,
    default: Date.now()
  },
  state: {
    type: String,
    required: [true, 'A profile must have a status'],
    enum: {
      values: ['active', 'suspended'],
      message: 'Status is either: active or suspended'
    }
  }
});

profileSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: '-__v -_id -passwordChangedAt'
  });
  next();
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

// {
//     "user":{
//     "id": 3,
//     "login": "test@example.com",
//     "password": "test",
//     "profile":{
//     "organization": "User organization"
//     },
//     "balance": 84.1,
//     "balanceLimit": 0.9,
//     "freeze": 0,
//     "currency": "rub",
//     "smsProfile":{
//     "messageCost": 0.5,
//     "totalSum": 1.5,
//     "totalCount": 3
//     },
//     "emailProfile":{
//     "messageCost": 0.9,
//     "totalSum": 13.5,
//     "totalCount": 15
//     },
//     "state": "active",
//     "registrationDate": "2015-09-03 14:32:47"
//     }
//    }
