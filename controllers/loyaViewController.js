const Profile = require('./../models/profileModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.balance = catchAsync(async (req, res, next) => {
  // find by user

  const query = Profile.findOne({ user: req.user }).select();

  const doc = await query;

  if (!doc) {
    return next(
      new AppError(`No document found for that user: ${req.user}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});
