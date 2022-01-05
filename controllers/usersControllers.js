const User = require('../models/User')
const Itinerary = require('../models/Itinerary')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


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
          let { name, lastname, email, password, urlphoto, country, google } = req.body
        //   console.log(req.body)
            if(password === '') password = null
        try {
            const existUser = await User.findOne({email})
            if(existUser){
                //res.json({success: true, error:'Username already exist', response: null})
                res.json({success: true, error: 'Email and Password incorrect'})
                // console.log(res)
            }else{
                    const hashedPassword = bcryptjs.hashSync(password, 10)
                    const user = new User({ name, lastname, email, password: hashedPassword, urlphoto, country, google })
                   // console.log(user)
                    const token = jwt.sign({...user}, process.env.SECRET_KEY)
                    await user.save()
                    res.json({success: true, response:{ token, ...user }, error: null})
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
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
    },
    accessUser: async (req, res) => {
        const { email, password, google } = req.body
        // console.log(email)
        try{
            const userExists = await User.findOne({email})
            // console.log(userExists)
            if (!userExists) throw new Error ('Email and Password incorrecty')
            if(userExists.google && !google) throw new Error ('Invalid email Google')
            let passwordMatches = bcryptjs.compareSync(password, userExists.password)
            if(!passwordMatches) throw new Error ('Email and Password incorrect')
            //  console.log('userExists', userExists) 
            const token = jwt.sign({...userExists}, process.env.SECRET_KEY)
            res.json({success: true, response:{ token, userExists }, error: null})
        }catch(error){
            res.json({success: false, response: error.message})
        }
    },
    persistentAccessUser: async (req, res) => {
        //  console.log(req.user) // Este console.log se ve en la consola del servidor.
        try{
            if(req.user){  // Los datos req.user biene del passport aquí es donde se hace la verificación de la data y no es necesario consultar BBDD
                res.json({success: true, response: req.user, error: null})
            }else{
                res.json({success: true, error: 'The user is not authenticated, try logging in again'})
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    }
}
module.exports = usersControllers