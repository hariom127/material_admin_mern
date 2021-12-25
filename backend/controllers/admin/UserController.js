const User = require('../../models/Users')
const {
  successRes,
  errorRes,
  validationRes,
} = require('../../helper/responseApi')
const catchAsyncErrors = require('../../middleware/catchAsyncErrors')
const { exec } = require('child_process')
const ObjectId = require('mongodb').ObjectID

/**
 * @desc Register User
 * @path /api/v1/user/create
 * @methods post
 */
exports.create = catchAsyncErrors(async (req, res) => {
  const { firstName, lastName, email, profile, contact } = req.body
  const password = '123456'
  User.findOne({ email }).exec((error, user) => {
    if (user) {
      return res.status(422).json({
        message: 'User already exist',
      })
    }
    const createUser = new User({
      firstName,
      lastName,
      email,
      contact,
      password,
      profile,
    })
    createUser.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: 'Something went wrong!',
        })
      }
      if (data) {
        return res.status(200).json({
          message: 'User has been created !',
          user: data,
        })
      }
    })
  })
})

/**
 * @desc get Users
 * @path /api/v1/users
 * @methods get
 */
exports.getUsers = catchAsyncErrors(async (req, res) => {
  User.find({ role: 'user' }).exec((err, users) => {
    if (users) {
      console.log(users)
      return res
        .status(200)
        .json(successRes('Get users successfully', users, res.statusCode))
    } else {
      return res
        .status(401)
        .json(errorRes('something went wrong!', res.statusCode))
    }
  })
})

/**
 * @desc delete user
 * @path /api/v1/users/:id
 * @methods delete
 */
exports.delete = catchAsyncErrors(async (req, res) => {
  const { id } = req.params
  console.log(req.params)
  User.deleteOne({ _id: ObjectId(id) }).exec((err, success) => {
    if (success) {
      return res
        .status(200)
        .json(
          successRes(
            'User has been deleted successfully',
            success,
            res.statusCode,
          ),
        )
    } else {
      return res
        .status(401)
        .json(errorRes('something went wrong!', res.statusCode))
    }
  })
})

/**
 * @desc update users status
 * @path /api/v1/users/status
 * @methods put
 * @param  id string
 * @param  status number
 */
exports.updateStatus = catchAsyncErrors(async (req, res) => {
  const { id, status } = req.body

  User.findByIdAndUpdate(ObjectId(id), { status }).exec((err, user) => {
    if (user) {
      return res
        .status(200)
        .json(
          successRes(
            'Status has been updated successfully',
            [],
            res.statusCode,
          ),
        )
    } else {
      return res
        .status(401)
        .json(errorRes('something went wrong!', res.statusCode))
    }
  })
})
