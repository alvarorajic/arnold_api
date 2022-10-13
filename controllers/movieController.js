const Movies = require('../models/movieModel');
const mongoose = require('mongoose');

/**
 * @desc get all movies
 * @route GET /api/movies
 * @access public (for now)
 */
const getAllMovies = async (req, res) => {
  const allMovies = await Movies.find({});

  res.status(200).json(allMovies);
};

/**
 * @desc find a single movie by ID
 * @route /api/movies/:id
 * @access public (for now)
 */
const findMovie = async (req, res) => {
  const { id } = req.params;

  //
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Movie does not exist' });
  }

  // Check if the workout exists
  const singleMovie = await Movies.findOne({ _id: id });
  if (!singleMovie) {
    return res.status(404).json({ error: "Movie doesn't exist" });
  }

  res.status(200).json(singleMovie);
};

module.exports = { getAllMovies, findMovie };
