require('dotenv').config()

const express = require("express")
const cors = require("cors")
const Router = require('./routes/routes')
require('./config/database')

const app = express()

/* Se agrego estos 3 items para mostrar los datos */
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));






app.use(cors())
app.get("/pruebas/datos", (req, res) => {
    console.log('me llego un pedido get...')
    res.json({respuesta:'holiiii'})
})

// app.get("/api/cities", (req, res) => {
//     res.json({response: cities})
// })


app.use('/api', Router)
















app.listen(4000, ()=>{console.log('Server en puerto 4000...')})