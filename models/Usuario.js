const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    mail: { type: String, required: true },
    password: String,
    image: String,
    google: {type:Boolean, default: false},
    cart: { type: Array, default: [] },
    address: String,
    wishList: { type: Array, default: [] },
})
const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario