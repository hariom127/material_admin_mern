"use strict";

const { forEach } = require("lodash");
const { MessagesEnglish, MessagesArabic } = require("../constants");
const Messages = {
  en: MessagesEnglish,
  ar: MessagesArabic,
};

var exportFuns = {};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

exportFuns.send = (req, res, status, message_code, data = {}) => {
  var language = req.headers.language || "en";
  language = Messages[language] ? language : "en";

  var message = "";

  if (data && data.errors && data.errors.length > 0) {
    data.errors.map((item) => {
      item.errText = Messages[language][item.errText]
        ? Messages[language][item.errText]
        : item.errText;
      return item;
    });

    message = data.errors.map((item) => item.errText).join(" | ");
  } else {
    message = Messages[language][message_code]
      ? Messages[language][message_code]
      : message_code;
  }

  var resObj = {
    message: message,
    data: data,
  };

  res.status(status).json(resObj);
  return true;
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = exportFuns;
