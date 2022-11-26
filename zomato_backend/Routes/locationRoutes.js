const express = require('express')
const location = require('../Controllers/location')

const routes = express.Router();

routes.get('/',location.getAllLocation)

module.exports = routes;