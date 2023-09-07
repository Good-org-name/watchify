const db = require("./db.js");
const { STRING, ARRAY, INTEGER } = require("sequelize");

const Movie = db.define("movie", {
  title: {
    type: STRING,
    allowNull: false,
  },
  genres: {
    type: ARRAY(INTEGER),
    defaultValue: [],
  },
});

module.exports = Movie;
