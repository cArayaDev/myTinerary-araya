require('dotenv').config()

const express = require("express")
const cors = require("cors")
const Router = require('./routes/routes')
require('./config/database')
const passport = require('passport')
const app = express()

/* Se agrego estos 3 items para mostrar los datos */
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors())
app.use(passport.initialize())

app.use('/api', Router)




app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0',  ()=>{console.log(`Server listening on port ${process.env.PORT || 4000}`)})