"use strict";

const _ = require("lodash");
const { AdminsService } = require("../../services");
const { Response, Encryption } = require("../../helpers");
var { UserModel } = require("../../models");
var exportFuns = {};

exportFuns.login = async (req, res) => {
  try {
    var username = _.trim(req.body.email) || "";
    var password = _.trim(req.body.password) || "";

    var errors = [];

    var findPattern = {
      email: username,
      is_deleted: 0,
    };

    var userdata = await AdminsService.findOne(findPattern);

    if (!userdata) {
      errors.push({ errField: "username", errText: "NO_ACCOUNT_EXIST_EMAIL" });
    }

    if (userdata) {
      var checkRes = Encryption.compareBcryptEncryption(
        password,
        userdata.password
      );
      if (!checkRes) {
        errors.push({
          errField: "password",
          errText: "INVALID_LOGIN_CREDENTIALS",
        });
      }
    }
    // return errors
    if (errors.length > 0) {
      let resMsg = errors
        .map(function (error) {
          return error["errText"];
        })
        .join(" ");

      return Response.send(req, res, 400, resMsg, { errors: errors });
    } else {
      var authToken = Encryption.getJwtEncryption({
        login_user_id: userdata._id,
        login_user_role: userdata.role,
        login_user_name: userdata.first_name,
      });

      // Update auth token
      let findPattern = { _id: userdata._id };

      let updatePattern = {
        auth_token: authToken,
        last_login_time: new Date(),
      };

      AdminsService.findOneAndUpdate(findPattern, updatePattern).then(
        async (updatedRes) => {
          var updatedUserData = await AdminsService.getAdminLoginData(
            userdata._id
          );
          // success
          console.log("authController", updatedUserData);
          Response.send(req, res, 200, "LOGIN_SUCCESS", updatedUserData);
        }
      );
    }
  } catch (err) {
    Response.send(req, res, 500, err.message);
  }
};

/*
| Register User
| /api/v1/users/register
| @Http post
*/
exports.register = async (req, res) => {
  console.log(req.body);
  //   const { firstName, lastName, email, country_code, phone, password, profile } =
  //     req.body;

  //   UserModel.findOne({ email }).exec((error, user) => {
  //     if (user) {
  //       return res.status(422).json({
  //         message: "User already exist",
  //       });
  //     }
  //     const createUser = new UserModel({
  //       firstName,
  //       lastName,
  //       email,
  //       country_code,
  //       phone,
  //       password,
  //       profile,
  //     });
  //     createUser.save((error, data) => {
  //       if (error) {
  //         return res.status(400).json({
  //           message: "Something went wrong!",
  //           err: error.message,
  //         });
  //       }
  //       if (data) {
  //         const { password, updatedAt, ...other } = data._doc;
  //         return res.status(200).json({
  //           message: "User has been created !",
  //           user: other,
  //         });
  //       }
  //     });
  //   });
};

module.exports = exportFuns;
