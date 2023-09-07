const express = require("express");
const path = require("path"); // Changed this line
const { fileURLToPath } = require("url");
const db = require("./db/db.js");
require("./db/index.js");
const userRoutes = require("./routes/userRoutes.js");
const fetchTMDB = require("./routes/fetchTMDB.js");
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
