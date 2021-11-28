const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')

const { getCities, getOneCity, inserOneCity, deleteCity, updateCity } = citiesControllers

Router.route('/cities')
.get(getCities)
.post(inserOneCity)

Router.route('/city/:id')
.get(getOneCity)
.delete(deleteCity)
.put(updateCity)


module.exports = Router