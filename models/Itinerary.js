const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: { type:String, required: true }, 
    username: { type:String, required: true }, 
    userimagen: { type:String, required: true }, 
    price: { type:Number, required: true }, 
    duration:{ type:Number, required: true },
    likes:{type: Array}, 
    hashtags: { type:String, required: true }, 
    city: { type:mongoose.Types.ObjectId, ref: "City" },
    comments:  [{
        comment: {type: String},
        userId: {type: mongoose.Types.ObjectId, ref: "User"},
    }],
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

module.exports = Itinerary