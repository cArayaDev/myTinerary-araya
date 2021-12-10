const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')

const { getCities, getOneCity, inserOneCity, deleteCity, updateCity } = citiesControllers
const { getItineraries, getOneItinerary, inserOneItinerary, deleteItinerary, updateItinerary } = itineraryControllers
const { getUsers, getOneUser, inserOneUser, deleteUser, updateUser } = usersControllers

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
.post(inserOneUser)

Router.route('/user/:id')
.get(getOneUser)
.delete(deleteUser)
.put(updateUser)


module.exports = Router