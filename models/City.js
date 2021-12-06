const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: { type:String, required: true }, 
    country: { type:String, required: true }, 
    img:{ type:String, required: true },
    itinerary: [{ type:mongoose.Types.ObjectId, ref: "Itinerary", required: true }]
})

const City = mongoose.model('City', citySchema)

module.exports = City