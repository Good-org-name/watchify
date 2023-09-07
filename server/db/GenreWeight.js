const db = require("./db.js");
const { INTEGER } = require("sequelize");

const GenreWeight = db.define("genreWeight", {
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
  },
  weight: {
    type: INTEGER,
    defaultValue: 0,
  },
});

module.exports = GenreWeight;
