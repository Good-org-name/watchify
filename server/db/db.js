const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const config = {};

dotenv.config();
config.logging = false;

if (process.env.QUIET) {
  config.logging = false;
}

const databaseURL = process.env.DATABASE_URL || "postgres://localhost/watchify";

const db = new Sequelize(databaseURL, { logging: false });

module.exports = db;
