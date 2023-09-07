const Sequelize = require("sequelize");
const { config } = require("dotenv");

config();

const databaseURL = process.env.DATABASE_URL || "postgres://localhost/watchify";

const db = new Sequelize(databaseURL, { logging: false });

module.exports = db;
