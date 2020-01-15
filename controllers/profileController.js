const Profile = require('./../models/profileModel');
const factory = require('./handlerFactory');

exports.createProfile = factory.createOne(Profile);

exports.getAllProfiles = factory.getAll(Profile);

exports.getProfile = factory.getOne(Profile);

exports.updateProfile = factory.updateOne(Profile);

exports.deleteProfile = factory.deleteOne(Profile);
