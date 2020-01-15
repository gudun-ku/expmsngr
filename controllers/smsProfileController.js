const SMSProfile = require('./../models/smsProfileModel');
const factory = require('./handlerFactory');

exports.createProfile = factory.createOne(SMSProfile);

exports.getAllProfiles = factory.getAll(SMSProfile);

exports.getProfile = factory.getOne(SMSProfile);

exports.updateProfile = factory.updateOne(SMSProfile);

exports.deleteProfile = factory.deleteOne(SMSProfile);
