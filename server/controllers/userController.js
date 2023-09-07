const User = require("../db/User.js");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports = { getAllUsers };
