const axios = require('axios');
const Movie = require('../model/movies.model');
require('dotenv').config();

const key = process.env.MOVIE_KEY;

const moviesController =async (req, res) => {
  let cityName = req.query.city;
  let URL= `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${cityName}`;
  axios.get(URL).then(result =>{
    let responseData = result.data.results.map((item) => {
        let imageURL = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        let movieObject = new Movie(
          item.title,
          item.overview,
          item.vote_average,
          item.vote_count,
          imageURL,
          item.popularity,
          item.release_date
        );
        return movieObject;
      });
      res.send(responseData);
  })
    .catch((error) => {
      res.send(error.message);
    });
};

module.exports = moviesController;