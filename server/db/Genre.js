import db from "./db.js";
import { DataTypes } from "sequelize";

const Genre = db.define("genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Genre;
