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
          let { title, username, userimagen, price, duration, likes, comments, hashtags, city } = req.body
          let itinerary
          let error = null
          try{
            itinerary = await new Itinerary({ title, username, userimagen, price, duration, likes, comments, hashtags, city }).save()
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
    },
    changeLikes: async (req, res) => {
        const {id_itinerary} = req.body
        let itinerary
        // console.log(req.user._id)
        try {
            itinerary = await Itinerary.findOne({_id:id_itinerary})
            if(itinerary){
                console.log('iti',itinerary)
                await Itinerary.updateOne({likes: req.user._id})
                await User.updateOne({control: !req.user.control}) 
            }
            // console.log(req.user.control) 
            // res.json({success: true, response:{ itinerary }, error: null})
        }catch(error){
            // res.json({success: false, response: null, error: error})
        }
    }
}
module.exports = itineraryControllers