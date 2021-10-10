const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const mongoosePaginate = require("mongoose-paginate-v2");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please enter first name"],
      trim: true,
      min: 3,
      maxlength: [15, "First name can not exceed 15 characters"],
    },
    last_name: {
      type: String,
      required: [true, "Please enter last name"],
      trim: true,
      min: 3,
      maxlength: [15, "First name can not exceed 15 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, "Please enter valid email"],
    },
    country_code: {
      type: String,
      trim: true,
      required: [true, "Country code must be provided."],
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      trim: true,
      minlength: [6, "Password must have at least 6 characters"],
      select: true,
    },
    profile: { type: String },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    auth_token: {
      type: String,
      default: "",
    },
    last_login_time: {
      type: Date,
      default: null,
    },
    device_token: {
      type: String,
      trim: true,
      default: "",
    },
    device_type: {
      type: String,
      enum: ["", "android", "ios", "web"],
      default: "",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// Encript Password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.plugin(mongoosePaginate);
userSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("User", userSchema);
