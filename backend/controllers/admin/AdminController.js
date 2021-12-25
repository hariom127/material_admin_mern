const { UsersModel } = require('../../models')
const { Auth } = require('../../helper')
// import { Auth } from '../../helper'
const catchAsyncErrors = require('../../middleware/catchAsyncErrors')
const sendToken = require('../../utils/jwtToken')
// const sendEmail = require("../ulits/sendEmail");
const crypto = require('crypto')
const { exec } = require('child_process')

/*
| login
| /api/v1/admin/login
*/
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body
  // check email and password
  if (!email || !password) {
    return res.status(401).json({
      message: 'Please enter a valid email and password',
    })
  }
  const user = await UsersModel.findOne({ email }).select('+password')

  if (!user) {
    return res.status(401).json({
      message: 'Invalid email or password!',
    })
  }
  // check is password correct or not
  const isPasswordMatch = await user.comparePassword(password)
  if (!isPasswordMatch) {
    return res.status(401).json({
      message: 'Invalid email or password!',
    })
  }
  sendToken(user, 200, res)
})

/*
| logout 
| /api/v1/admin/logout
*/
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  })

  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  })
})

/*
| get profile of login user
| /api/v1/admin/profile
*/
exports.userProfile = catchAsyncErrors(async (req, res, next) => {
  return res.status(200).json({
    message: 'Profile get successfully!',
    profile: req.user,
  })
})
