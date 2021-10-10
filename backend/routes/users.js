var express = require("express");
var router = express.Router();
const { register } = require("../controllers/admin/Auth");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/register", register);

module.exports = router;
