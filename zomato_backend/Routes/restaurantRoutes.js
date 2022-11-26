const express = require('express')
const restaurant = require('../Controllers/restaurant')


const routes = express.Router();

routes.get('/',restaurant.getRestaurentsData)
routes.get('/city/:id',restaurant.getRestaurentsByCityId)


module.exports = routes;