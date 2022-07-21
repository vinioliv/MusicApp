


const express = require('express')

const musicController = require('./controllers/MusicController');

const routes = express.Router();


routes.get('/search', musicController.search);
routes.post('/download', musicController.download)

module.exports = routes;