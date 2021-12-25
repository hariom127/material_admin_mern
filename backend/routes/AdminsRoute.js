'use strict'
var express = require('express')
var router = express.Router()
// const { validateRequest } = require('../middleware');

var { Admin, User } = require('../controllers/admin')

//++++++++++++++++++++++++++++++++++++++++++++++++
//prefix-url : /api/v1/admin

// auth
router.post('/auth/login', Admin.login)
router.post('/auth/logout', Admin.logout)

//user
router.post('/users/create', User.create)
router.get('/users', User.getUsers)
router.delete('/users/:id', User.delete)
router.put('/users/status', User.updateStatus)

module.exports = router
