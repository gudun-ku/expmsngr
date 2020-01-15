const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: [true, 'A profile must have an organisation'],
    minlength: [5, 'A user login must have greater than 5 characters']
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
