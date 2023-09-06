import db from "./db.js";
const { INTEGER, STRING } = db.Sequelize;

const Interaction = db.define("interaction", {
  userId: {
    type: INTEGER,
    references: {
      model: "users", // name of the table, not the model file
      key: "id",
    },
    allowNull: false,
  },
  movieId: {
    type: STRING,
    allowNull: false,
  },
  rating: {
    type: INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 5,
    },
  },
  status: {
    type: STRING,
    allowNull: true,
    validate: {
      isIn: [["not_interested", "watched", "want_to_watch"]],
    },
  },
});

export default Interaction;
