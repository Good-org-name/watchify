import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/fetchMovies", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: "7c1a02da75b25d48c10edcf2e32896b2",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
});

export default router;
