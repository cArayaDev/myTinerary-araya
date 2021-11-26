const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')


Router.route('/cities')
.get(citiesControllers.getCities)
.post(citiesControllers.postCities)



module.exports = Router