const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type:String, required: true }, 
    lastname: { type:String, required: true }, 
    email: { type:String, required: true }, 
    password: { type:String, required: true },
    urlphoto: { type:String, required: true },
    country: { type:String, required: true },
    google: {type:Boolean, default: false}
})

const User = mongoose.model('User', userSchema)

module.exports = User