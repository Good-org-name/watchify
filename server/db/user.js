const db = require("./db.js");
const { STRING, ARRAY, INTEGER } = require("sequelize");

const User = db.define("user", {
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  favoriteGenres: {
    type: ARRAY(INTEGER),
    defaultValue: [],
  },
});

module.exports = User;
