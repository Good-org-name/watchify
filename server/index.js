import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import db from "./db/db.js";
import "./db/index.js";
import userRoutes from "./routes/userRoutes.js";
import fetchTMDB from "./routes/fetchTMDB.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();

server.use("/dist", express.static(path.join(__dirname, "../../dist")));
server.use("/static", express.static(path.join(__dirname, "../static")));

//routes
server.use("/api", userRoutes);
server.use("/api", fetchTMDB);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

async function init() {
  try {
    await db.authenticate();
    console.log("Database connected.");

    server.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
}

init();
