const joi = require('joi')


const validator = (req, res, next) => {
    
    const schema = joi.object({
        name: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).messages({
            'string.empty':'This field is required',
            'string.min':'This field name must be at least 3 characters long'
        }),
        lastname: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.empty':'This field is required',
            'string.min':'This field lastname must be at least 3 characters long'
        }),
        email: joi.string().min(3).required().email().required().messages({
            'string.email': 'Must be a valid email',
        }),
        password: joi.string().min(6).max(15).required().messages({
            'string.min':'This field must be at least 6 characters long',
            'string.empty':'This field is required',
        }),
        urlphoto: joi.string().max(20).min(8).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.empty':'This field is required',
        }),
        country: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.empty':'This field is required',
            'string.min':'This field country must be at least 3 characters long'
        }),
        
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    if(validation.error){
        console.log(validation.error)
       return res.json({success: false, response: validation.error.details})
    }
    next()
}   
module.exports = validator
