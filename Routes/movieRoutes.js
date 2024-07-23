const express = require("express");
const router = express.Router();
const movieController = require("../Controller/movieController");

// Route to get all movies
router.get("/movies", movieController.getAllMovies);

// Route to create a new movie
router.post("/movies", movieController.createMovie);

// Route to get a specific movie by custom ID field
router.get("/movies/:id", movieController.getMovieById);

// Route to update a movie by custom ID field
router.put("/movies/:id", movieController.updateMovie);

// Route to delete a movie by custom ID field
router.delete("/movies/:id", movieController.deleteMovie);

// Route to search for movies by title or synopsis
router.get("/movies/search", movieController.searchMovies);

// Route to search for a specific movie by its ID
router.get("/movies/search/:id", movieController.searchMoviesById);

module.exports = router;
