const db = require("./db.js");
const { STRING } = require("sequelize");

const Genre = db.define("genre", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Genre;
