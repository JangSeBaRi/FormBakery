const { DataTypes } = require("sequelize");
const db = require("../../models/index");
const User = require("../../models/user")(db.sequelize, DataTypes);

module.exports = {
  login(req, res) {
    res.send("login page");
  },
  logout(req, res) {
    res.sned("ff");
  },
};
