import { Sequelize } from "sequelize";

const databaseUrl =
  import.meta.env.VITE_DATABASE_URL || "postgres://localhost/watchify";

const db = new Sequelize(databaseUrl, { logging: false });

db.authenticate()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

export default db;
