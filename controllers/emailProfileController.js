const EmailProfile = require('./../models/emailProfileModel');
const factory = require('./handlerFactory');

exports.createProfile = factory.createOne(EmailProfile);

exports.getAllProfiles = factory.getAll(EmailProfile);

exports.getProfile = factory.getOne(EmailProfile);

exports.updateProfile = factory.updateOne(EmailProfile);

exports.deleteProfile = factory.deleteOne(EmailProfile);
