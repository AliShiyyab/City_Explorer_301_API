const axios = require('axios');
const Weather = require('../model/weather.model');
require('dotenv').config();

const WEATHER_KEY = process.env.WEATHER_KEY;

const weatherController = async (req, res) => {
    const city = req.query.city;
    const key = process.env.WEATHER_KEY;
    console.log(city);
    if (city != undefined) {
      const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`;
      axios
        .get(weatherBitUrl)
        .then((response) => {
          console.log(response.data);
          const resposeData = response.data.data.map((obj) => new Weather(obj));
          res.status(200).send(resposeData);
        })
        .catch((error) => {
          res.status(500).send(error.message);
        });
    } else {
      res.send('Please Enter Proper City Name !');
    }
  };
  
  module.exports = weatherController;