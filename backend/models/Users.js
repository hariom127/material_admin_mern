const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter first name'],
      trim: true,
      min: 3,
      maxlength: [15, 'First name can not exceed 15 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter last name'],
      trim: true,
      min: 3,
      maxlength: [15, 'First name can not exceed 15 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'Please enter valid email'],
    },
    contact: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
      trim: true,
      minlength: [6, 'Password must have at least 6 characters'],
      select: false,
    },
    profile: { type: String },
    status: { type: Number, default: 0 }, //1 = active, 0 = inactive
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  },
)

// Return JWT token
usersSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

// Encript Password before save
usersSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password for login
usersSchema.methods.comparePassword = async function (enteredPassword) {
  console.log('password:', enteredPassword)
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('Users', usersSchema)
