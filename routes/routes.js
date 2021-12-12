const Router = require('express').Router()
const validator = require('../config/validator')
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')

const { getCities, getOneCity, inserOneCity, deleteCity, updateCity } = citiesControllers
const { getItineraries, getOneItinerary, inserOneItinerary, deleteItinerary, updateItinerary } = itineraryControllers
const { getUsers, getOneUser, inserOneUser, deleteUser, updateUser, accessUser } = usersControllers

Router.route('/cities')
.get(getCities)
.post(inserOneCity)

Router.route('/city/:id')
.get(getOneCity)
.delete(deleteCity)
.put(updateCity)

Router.route('/itineraries')
.get(getItineraries)
.post(inserOneItinerary)

Router.route('/itinerary/:id')
// .get(getOneItinerary)
.delete(deleteItinerary)
.put(updateItinerary)

Router.route('/itinerary/:idCiudad')
.get(getOneItinerary)

Router.route('/users')
.get(getUsers)
.post(validator, inserOneUser)

Router.route('/user/:id')
.get(getOneUser)
.delete(deleteUser)
.put(updateUser)

Router.route('/sigin')
.post(accessUser)



module.exports = Router