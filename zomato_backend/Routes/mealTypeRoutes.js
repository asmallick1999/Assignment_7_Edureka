const express = require('express')
const mealTypeController = require('../Controllers/mealType')

const routes = express.Router();

routes.get('/',mealTypeController.getAllMealTypeData)

module.exports = routes;