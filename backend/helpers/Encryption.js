"use strict";

const config = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cryptLib = require("@skavinvarnan/cryptlib");

var exportFuns = {};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

exportFuns.getBcryptEncryption = (textStr) => {
  return bcrypt.hashSync(textStr, 10);
};

exportFuns.compareBcryptEncryption = (textStr, encryptText) => {
  return bcrypt.compareSync(textStr, encryptText);
};

exportFuns.getJwtEncryption = (
  dataObj = {},
  expiresIn = config.appLoginSessionExpiryTime + "m"
) => {
  return jwt.sign(dataObj, config.jwtSecretKey, {
    expiresIn: expiresIn,
  });
};

exportFuns.getJwtDecryption = (authToken) => {
  try {
    return jwt.verify(authToken, config.jwtSecretKey);
  } catch (err) {
    throw err.message;
  }
};

exportFuns.getCryptLibEncryption = (plainText) => {
  return cryptLib.encryptPlainTextWithRandomIV(plainText, config.apiAccessKey);
};

exportFuns.getCryptLibDecryption = (decryptedString) => {
  try {
    return cryptLib.decryptCipherTextWithRandomIV(
      decryptedString,
      config.apiAccessKey
    );
  } catch (err) {
    throw err.message;
  }
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = exportFuns;
