const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')

const { getCities, getOneCity, inserOneCity, deleteCity, updateCity } = citiesControllers
const { getItineraries, getOneItinerary, inserOneItinerary, deleteItinerary, updateItinerary } = itineraryControllers

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


module.exports = Router