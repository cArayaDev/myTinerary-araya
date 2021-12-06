const Itinerary = require('../models/Itinerary')

const itineraryControllers = {
    getItineraries: async (req, res) => {
        let itineraries
        let error = null
        try{
            itineraries = await Itinerary.find().populate('city') 
        }catch(error){
            error = error
             console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    },
    getOneItinerary: async (req, res) => {
        let id = req.params.id
        let itinerary
        let error = null
        try{
            itinerary = await Itinerary.findOne({_id:id})
        }catch(error){
            error = error
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },
    inserOneItinerary: async (req, res) => {
          let { title, username, userimagen, price, duration, likes, comments, hashtags } = req.body
          let itinerary
          let error = null
          try{
            itinerary = await new Itinerary({ title, username, userimagen, price, duration, likes, comments, hashtags }).save()
          }catch(error){
            error = error
            console.error(error)
          }
          res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
          })
    },
    deleteItinerary: async (req, res) => {
        const id = req.params.id
        let error = null
        try{
            await Itinerary.findOneAndDelete({_id:id})
        }catch(error){
            error = error
            console.error(error)
        }
        res.json({success: true})
    },
    updateItinerary: async (req, res) => {
        let id = req.params.id
        let itinerary = req.body
        let update
        try{
            update = await Itinerary.findOneAndUpdate({_id:id}, itinerary, {new:true})
        }catch(error){
            console.error(error)
        }
        res.json({success: update ? true : false})
    }
}
module.exports = itineraryControllers