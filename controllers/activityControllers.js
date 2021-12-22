const Activity = require('../models/Activity')


const activityControllers = {
    getActivities: async (req, res) => {
        let activities
        let error = null
        try{
            activities = await Activity.find({})
        }catch(error){
            error = error
             console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },
    // getOneActivity: async (req, res) => {
    //     let id = req.params.id
    //     let activity
    //     let error = null
    //     try{
    //         activity = await Activity.findOne({_id:id})
    //     }catch(error){
    //         error = error
    //         console.error(error)
    //     }
    //     res.json({
    //         response: error ? 'ERROR' : activity,
    //         success: error ? false : true,
    //         error: error
    //     })
    // },
    inserOneActivity: async (req, res) => {
        let { activity, img, itinerary } = req.body
        let activities
        let error = null
        try{
            activities = await new Activity({ activity, img, itinerary }).save()
        }catch(error){
          error = error
          console.error(error)
        }
        res.json({
          response: error ? 'ERROR' : activity,
          success: error ? false : true,
          error: error
        })
  },
  deleteActivity: async (req, res) => {
    const id = req.params.id
    let error = null
    try{
        await Activity.findOneAndDelete({_id:id})
    }catch(error){
        error = error
        console.error(error)
    }
    res.json({success: true})
  },
  updateActivity: async (req, res) => {
    let id = req.params.id
    let activity = req.body
    let update
    // console.log(city)
    try{
        update = await Activity.findOneAndUpdate({_id:id}, activity, {new:true})
        console.log(update) 
    }catch(error){
        console.error(error)
    }
    res.json({success: update ? true : false})
   },
   getActivitiesByItinerary: async (req, res) => {
    try {
        let activitiesItinerary = await Activity.find({itinerary: req.params.id})
        
        res.json({success: true, response: activitiesItinerary})
        //   console.log(res)
    } catch (error) {
        res.json({success: false, response: error.message})
    }
}
}
module.exports = activityControllers