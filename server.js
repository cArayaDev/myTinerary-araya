
const cities = [
    {name:"Madrid", country:'Spain', img:"montecarlo.jpg"},
    {name:"Barcelona", country:'Spain', img:"barcelona.jpg"},
    {name:"Budapest", country:'Hungary', img:"budapest.jpg"},
    {name:"Chicago", country:'United State', img:"chicago.jpg"},
    {name:"Copenhague", country:'Denmark', img:"copenhague.jpg"},
    {name:"Jerusalen", country:'Israel', img:"jerusalem.jpg"},
    {name:"London", country:'United Kingdom', img:"londres.jpg"},
    {name:"Paris", country:'France', img:"paris.jpg"},
    {name:"Sydney", country:'Australia', img:"sidney.jpg"},
    {name:"Venice", country:'Italy', img:"venecia.jpg"},
    {name:"Washington", country:'United State', img:"washington.jpg"},
    {name:"San Francisco", country:'United State', img:"sanfrancisco.jpg"},
    {name:"Beijing", country:'China', img:"pekin.jpg"},
    {name:"La serena", country: 'Chili', img:"laserena.jpg"},
    {name:"Coquimbo", country: 'Chili', img:"coquimbo.jpg"},
]
const express = require("express")

const cors = require("cors")


const app = express()
app.use(cors())
app.get("/pruebas/datos", (req, res) => {
    console.log('me llego un pedido get...')
    res.json({respuesta:'holiiii'})
})

app.get("/api/cities", (req, res) => {
    res.json({response: cities})
})

app.listen(4000, ()=>{console.log('Server en puerto 4000...')})