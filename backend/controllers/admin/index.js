'use strict'

var UserController = require('./UserController')
var AdminController = require('./AdminController')

module.exports = {
  User: UserController,
  Admin: AdminController,
}
