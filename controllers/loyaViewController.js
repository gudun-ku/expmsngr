const Profile = require('./../models/profileModel');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.balance = catchAsync(async (req, res, next) => {
  // find by user

  const query = User.findById(req.user._id).select('-___v, -passwordChangedAt');

  const doc = await query;

  if (!doc) {
    return next(
      new AppError(`No document found for that user: ${req.user.name}`, 404)
    );
  }

  res.status(200).json({
    user: doc
  });
});
