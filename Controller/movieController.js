const Movie = require("../Models/movieModel");

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific movie by custom ID field
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ ID: parseInt(req.params.id, 10) });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a movie by custom ID field
const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { ID: parseInt(req.params.id, 10) }, // Use custom ID field
      req.body,
      { new: true }
    );
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a movie by custom ID field
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({
      ID: parseInt(req.params.id, 10), // Use custom ID field
    });
    if (movie) {
      res.status(204).send(); // No content
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search for movies by title or synopsis
const searchMovies = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();
    const movies = await Movie.find({
      $or: [
        { Title: new RegExp(query, "i") },
        { Synopsis: new RegExp(query, "i") },
      ],
    });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search for a specific movie by its ID
const searchMoviesById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ ID: parseInt(req.params.id, 10) });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
  searchMoviesById, // Make sure this is exported
};
