import db from "./db.js";
import { DataTypes } from "sequelize";

const GenreWeight = db.define("genreWeight", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genreId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default GenreWeight;
