const Profile = require('./../models/profileModel');
const factory = require('./handlerFactory');

exports.createProfile = factory.createOne(Profile);
