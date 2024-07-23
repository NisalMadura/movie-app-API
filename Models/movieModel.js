// models/movieModel.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  ID: { type: Number, required: true, unique: true },
  Title: { type: String, required: true },
  Runtime: { type: Number, required: true },
  Year: { type: Number, required: true },
  Director: { type: String, required: true },
  Country: { type: String, required: true },
  Cast: { type: [String], required: true },
  Genre: { type: [String], required: true },
  Synopsis: { type: String, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
