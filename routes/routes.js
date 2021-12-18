const Router = require('express').Router()
const validator = require('../config/validator')
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')
const passport = require('../config/passport')

const { getCities, getOneCity, inserOneCity, deleteCity, updateCity } = citiesControllers
const { getItineraries, getOneItinerary, inserOneItinerary, deleteItinerary, updateItinerary, changeLikes } = itineraryControllers
const { getUsers, getOneUser, inserOneUser, deleteUser, updateUser, accessUser, persistentAccessUser } = usersControllers

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
// .post(passport.authenticate('jwt', { session:false }), accessUser)
Router.route('/siginPersistent')
.post(passport.authenticate('jwt', { session:false }), persistentAccessUser)
Router.route('/changeLikes')
.post(passport.authenticate('jwt', { session:false }), changeLikes)

module.exports = Router