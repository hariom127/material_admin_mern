var express = require("express");
var router = express.Router();
const { Auth } = require("../controllers/admin");

router.post("/login", Auth.login);

module.exports = router;
