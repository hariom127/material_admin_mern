const mongoose = require("mongoose");
var config = require("../config");
const connectDatabase = () => {
  mongoose
    .connect(config.mongoURI, {})
    .then((con) => {
      console.log(`DB connected with host: ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
