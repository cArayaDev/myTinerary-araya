const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')

const { getCities, postCities, getOneCity } = citiesControllers

Router.route('/cities')
.get(getCities)
.post(postCities)

Router.route('/city/:id')
.get(getOneCity)


module.exports = Router