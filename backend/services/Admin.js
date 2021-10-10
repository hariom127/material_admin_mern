"use strict";

const mongoose = require("mongoose");
const config = require("../config");
const { UserModel } = require("../models");
const { Media } = require("../helpers");

const UPLOAD_FOLDER_PATH = "public/uploads/admins/";
const UPLOAD_FOLDER_URL = config.baseUrl + "/uploads/admins";
const DEFAULT_FOLDER_URL = config.baseUrl + "/default";

var exportFuns = {};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

exportFuns.create = async function (createPattern) {
  return UserModel.create(createPattern)
    .then((createRes) => {
      return createRes;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.updateOne = async function (findPattern, updatePattern) {
  return UserModel.updateOne(findPattern, updatePattern)
    .then((updateRes) => {
      return updateRes;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.updateMany = async function (findPattern, updatePattern) {
  return UserModel.updateMany(findPattern, updatePattern)
    .then((updateRes) => {
      return updateRes;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.findOneAndUpdate = async function (
  findPattern,
  updatePattern,
  selectPattern = ""
) {
  var options = {
    new: true,
    runValidators: true,
    select: selectPattern,
  };

  return UserModel.findOneAndUpdate(findPattern, updatePattern, options)
    .then((updatedData) => {
      return updatedData;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.findOne = async function (
  findPattern,
  selectPattern = "",
  populatePattern = null
) {
  var query = UserModel.findOne(findPattern, selectPattern);

  if (populatePattern) {
    query.populate(populatePattern);
  }

  return query
    .then((resultData) => {
      return resultData;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.deleteOne = async function (deletePattern) {
  return UserModel.deleteOne(deletePattern)
    .then((deleteRes) => {
      return deleteRes;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.findOne = async function (findPattern) {
  return UserModel.findOne(findPattern)
    .then((userData) => {
      return userData;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.countDocuments = async function (findPattern) {
  return UserModel.countDocuments(findPattern)
    .then((count) => {
      return count;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.getPaginatedData = async function (
  findPattern,
  sortPattern,
  page_no,
  limit
) {
  var query = findPattern;
  var options = {
    sort: sortPattern,
    page: page_no,
    limit: limit,
  };

  return UserModel.paginate(query, options)
    .then((paginatedData) => {
      return paginatedData;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.getAggregatePaginatedData = async function (
  queryPattern,
  sortPattern,
  page_no,
  limit
) {
  var query = UserModel.aggregate(queryPattern);
  var options = {
    sort: sortPattern,
    page: page_no,
    limit: limit,
  };

  return UserModel.aggregatePaginate(query, options)
    .then((resultData) => {
      return resultData;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.aggregateFindOne = async function (queryPattern, sortPattern) {
  var query = UserModel.aggregate(queryPattern);
  var options = {
    sort: sortPattern,
    page: 1,
    limit: 1,
  };

  return UserModel.aggregatePaginate(query, options)
    .then((resultData) => {
      return resultData.docs.length > 0 ? resultData.docs[0] : null;
    })
    .catch((err) => {
      throw err;
    });
};

exportFuns.updateImage = async function (
  itemData,
  imageData,
  fieldName,
  deleteExiting = true
) {
  if (itemData && imageData && fieldName != "") {
    var destination = UPLOAD_FOLDER_PATH + itemData._id;
    Media.createDirectory(destination);

    // Upload file
    var fileName = Media.uploadFile(imageData, destination);

    // Create thumbnail
    var filePath = destination + "/" + fileName;
    var thumbPath = destination + "/thumb_" + fileName;
    Media.createThumbnail(filePath, thumbPath, 200, 200);

    // Delete existing files
    if (itemData[fieldName] && itemData[fieldName] != "") {
      Media.deleteFile(destination + "/" + itemData[fieldName]);
      Media.deleteFile(destination + "/thumb_" + itemData[fieldName]);
    }

    return fileName;
  } else {
    return itemData[fieldName];
  }
};

exportFuns.getAdminLoginData = async function (userId) {
  var matchPattern = {
    _id: mongoose.Types.ObjectId(userId),
  };

  // select specific fields
  var selectedFields = [
    "first_name",
    "last_name",
    "role",
    "country_code",
    "phone",
    "email",
    "profile",
    "auth_token",
    "last_login_time",
  ];

  var addFieldsPattern = {
    user_image_url: {
      $cond: {
        if: { $eq: ["$profile", ""] },
        then: DEFAULT_FOLDER_URL + "/placeholder-user.jpg",
        else: {
          $concat: [
            UPLOAD_FOLDER_URL,
            "/",
            { $toString: "$_id" },
            "/thumb_",
            "$profile",
          ],
        },
      },
    },
    user_image_thumb_url: {
      $cond: {
        if: { $eq: ["$profile", ""] },
        then: DEFAULT_FOLDER_URL + "/placeholder-user.jpg",
        else: {
          $concat: [
            UPLOAD_FOLDER_URL,
            "/",
            { $toString: "$_id" },
            "/",
            "$profile",
          ],
        },
      },
    },
  };

  var projectPattern = {};
  selectedFields.forEach((item) => {
    projectPattern[item] = 1;
  });

  var queryPattern = [];

  // Push match & project
  queryPattern.push({ $match: matchPattern });
  queryPattern.push({ $project: projectPattern });
  queryPattern.push({ $addFields: addFieldsPattern });

  var sortPattern = { createdAt: -1 };

  return exportFuns
    .aggregateFindOne(queryPattern, sortPattern)
    .then((userdata) => {
      return userdata;
    })
    .catch((err) => {
      throw err;
    });
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = exportFuns;
