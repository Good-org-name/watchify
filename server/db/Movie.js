import db from "./db.js";
import { DataTypes } from "sequelize";

const Movie = db.define("movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genres: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: [],
  },
});

export default Movie;
