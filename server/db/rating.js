import db from "./db";
const { STRING, INTEGER } = db.Sequelize;

const Rating = db.define("rating", {
  movieId: {
    type: STRING,
    allowNull: false,
  },
  score: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  userId: {
    type: INTEGER,
    references: {
      model: "users",
      key: "id",
    },
    allowNull: false,
  },
});

export default Rating;
