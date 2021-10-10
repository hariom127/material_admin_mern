"use strict";

module.exports = {
  // MongoDB Connection String
  mongoURI:
    "mongodb://footprint:cQZMR[LqbtB8E@3.7.83.168:27017/wedeliver-app-dev?authSource=admin",

  // Server Configuration
  expressPort: 4001,
  baseUrl: "http://3.7.83.168:3090",
  rootPath: "/home/ubuntu/Projects/wedeliver-app/backend",

  // Project Configuration
  projectName: "Hariom Ecom",
  defaultTimezone: "Asia/Kolkata",
  defaultCountryCode: "+91",
  allowedLanguages: ["en"],

  // Webservices Security Configuration
  validateApiAccess: false,
  apiAccessKey: "945]Y3x[aRJS}DxE",
  apiAccessTimeout: 60, // In seconds

  // JWT Authentication Configuration
  validateAuthorization: true,
  jwtSecretKey: "HariomEcom123",
  appLoginSessionExpiryTime: 7 * 24 * 60, // 7 day in minutes
  allowMultiSessions: true,

  // Google Api Key
  geocoderApiKey: "AIzaSyCnHXmtGqz7eOZg2rW9U20KDit1tRF6rhU",

  // FCM Server Key For Push Notifications
  fcmServerKey:
    "AAAA4UQ5Orc:APA91bH5h6HtnGYxuUP3w05MaNP7ujHved5klsyPD9pUbFohNKvia_W4V4LrI2tdXwLkdEwUBcang5qTrTDrvdBmKGlfNMXKwwunAklTuCcSkPIXOr50Fn86dnKIkSVPWqXxJBSI6pVo",

  // SMTP Email Configuration
  email_auth_user: "career.it20@gmail.com",
  email_auth_password: "bygaocdyforwosyc",
  email_auth_service: "gmail",
  email_auth_port: 587,
  email_auth_host: "smtp.gmail.com",
  email_from: "career.it20@gmail.com",
  email_from_name: "HariomEcom",

  // System Emails
  adminEmail: "career.it20@gmail.com",
  customerCareEmail: "career.it20@gmail.com",
};
