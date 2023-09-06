import db from "./db";
const { STRING, JSON } = db.Sequelize;

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
  preferences: {
    type: JSON,
    defaultValue: {},
  },
});

export default User;
