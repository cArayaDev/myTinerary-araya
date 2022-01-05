const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const user = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, (jwt_payload, done) => {
   user.findOne({_id:jwt_payload._doc._id})
   .then(user => {
    if(user){
         return done(null, user)
       }else{
        return done(null, false)
       }
   })
   .catch(err => {
    return done(err, false)
   })
}))


