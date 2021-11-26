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



const citiesControllers = {
    getCities:(req, res) => {
        res.json({response: cities})
    },
    postCities:(req, res) => {
        cities.push(req.body)
        res.json({response: cities})
    }
}





module.exports = citiesControllers