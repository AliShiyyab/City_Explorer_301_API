const express = require('express');
const Server = express();
const cors = require('cors');
const weatherController = require('./controller/waether.controller');
const moviesController = require('./controller/movies.controller');
Server.use(cors());
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//  Route
Server.get('/', (req, res) => {
    let str = 'Hello From Ali Back End WebSites.';
    res.send(str);
  }
);

Server.get('/weather', weatherController);
Server.get('/movies', moviesController);

//Show the porst Selector.
Server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  }
);

//localhost:3055/