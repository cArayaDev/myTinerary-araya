const User = require('../models/User')
const bcryptjs = require('bcryptjs')


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
            if(password === '') password = null
        try {
            const existUser = await User.findOne({email})
            if(existUser){
                res.json({success: false, error:'Username already exist', response: null})
            }else{
                let user
                let error = null
                try{
                    const hashedPassword = bcryptjs.hashSync(password, 10)
                    user = new User({ name, lastname, email, password: hashedPassword, urlphoto, country })
                    await user.save()
                    res.json({success: true, response: user, error: null})
                }catch(error){
                    error = error
                    console.error(error)
                }
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
        const { email, password } = req.body
        try{
            const userExists = await User.findOne({email})
            if(!userExists){
                res.json({success: true, error: 'Email and Password incorrect'})
            }else{
                let passwordMatches = bcryptjs.compareSync(password, userExists.password)
                if(passwordMatches){
                    res.json({success: true, response:{ userExists }, error: null})
                }else{
                    res.json({success: true, error: 'Email and Password incorrect'})
                }
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    }
}
module.exports = usersControllers