const User = require('../models/User')



const usersControllers = {
    getUsers: async (req, res) => {
        let users
        let error = null
        try{
             users = await User.find({})
        }catch(error){
            error = error
             console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : users,
            success: error ? false : true,
            error: error
        })
    },
    getOneUser: async (req, res) => {
        let id = req.params.id
        let user
        let error = null
        try{
            user = await User.findOne({_id:id})
        }catch(error){
            error = error
            console.error(error)
        }
        res.json({
            response: error ? 'ERROR' : user,
            success: error ? false : true,
            error: error
        })
    },
    inserOneUser: async (req, res) => {
          let { name, lastname, email, password, urlphoto, country } = req.body
          let user
          let error = null
          try{
            user = await new User({ name, lastname, email, password, urlphoto, country }).save()
          }catch(error){
            error = error
            console.error(error)
          }
          res.json({
            response: error ? 'ERROR' : user,
            success: error ? false : true,
            error: error
          })
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        let error = null
        try{
            await User.findOneAndDelete({_id:id})
        }catch(error){
            error = error
            console.error(error)
        }
        res.json({success: true})
    },
    updateUser: async (req, res) => {
        let id = req.params.id
        let user = req.body
        let update
        try{
            update = await User.findOneAndUpdate({_id:id}, user, {new:true})
            console.log(update) 
        }catch(error){
            console.error(error)
        }
        res.json({success: update ? true : false})
    }
}
module.exports = usersControllers