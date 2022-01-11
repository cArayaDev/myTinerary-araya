const Router = require('express').Router()
const validator = require('../config/validator')
const roles = require('../config/roles')
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const usersControllers = require('../controllers/usersControllers')
const activityControllers = require('../controllers/activityControllers')
const passport = require('../config/passport')

const { getCities, getOneCity, inserOneCity, deleteCity, updateCity } = citiesControllers
const { getItineraries, getOneItinerary, inserOneItinerary, deleteItinerary, updateItinerary, changeLikesUsers, 
        itineraryByCity, addComment, deleteComment, editComment } = itineraryControllers
const { getUsers, getOneUser, inserOneUser, deleteUser, updateUser, accessUser, persistentAccessUser } = usersControllers
const { getActivities, getActivitiesByItinerary, inserOneActivity, deleteActivity, updateActivity } = activityControllers

Router.route('/activities')
.get(getActivities)
.post(inserOneActivity)

Router.route('/activity/:id')
.get(getActivitiesByItinerary)
.delete(deleteActivity)
.put(updateActivity)

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
.get(itineraryByCity)
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

Router.route('/sigin')
.post(accessUser)
// .post(passport.authenticate('jwt', { session:false }), accessUser)
Router.route('/siginPersistent')
.post(passport.authenticate('jwt', { session:false }), persistentAccessUser)

Router.route('/changeLikes')
.put(passport.authenticate('jwt', { session:false }), changeLikesUsers)

Router.route('/comments/:id')
.post(passport.authenticate('jwt', { session:false }), addComment)

Router.route('/comments/:id')
.put(passport.authenticate('jwt', { session:false }), deleteComment)

Router.route('/editcomments/:id')
.put(passport.authenticate('jwt', { session:false }), editComment)

module.exports = Router