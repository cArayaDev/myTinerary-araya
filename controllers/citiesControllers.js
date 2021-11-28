const City = require('../models/City')

const citiesControllers = {
    getCities: async (req, res) => {
        let cities
        let error = null
        try{
             cities = await City.find()
        }catch(error){
            error = error
             console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : cities,
            success: error ? false : true,
            error: error
        })
    },
    getOneCity: async (req, res) => {
        let id = req.params.id
        let city
        let error = null
        try{
            city = await City.findOne({_id:id})
        }catch(error){
            error = error
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    },
    inserOneCity: async (req, res) => {
          let { name, country, img } = req.body
          let city
          let error = null
          try{
              city = await new City({ name, country, img }).save()
          }catch(error){
            error = error
            console.error(error)
          }
          res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
          })
    },
    deleteCity: async (req, res) => {
        const id = req.params.id
        let error = null
        try{
            await City.findOneAndDelete({_id:id})
        }catch(error){
            error = error
            console.error(error)
        }
        res.json({success: true})
    },
    updateCity: async (req, res) => {
        let id = req.params.id
        let city = req.body
        let update
        console.log(city)
        try{
            update = await City.findOneAndUpdate({_id:id}, city, {new:true})
            console.log(update) 
        }catch(error){
            console.error(error)
        }
        res.json({success: update ? true : false})
    }
}

module.exports = citiesControllers