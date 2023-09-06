import { Sequelize } from "sequelize";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const databaseURL = process.env.DATABASE_URL || "postgres://localhost/watchify";

const db = new Sequelize(databaseURL, { logging: false });

export default db;
