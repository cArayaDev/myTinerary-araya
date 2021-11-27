const cities = [
    {id:0, name:"Madrid", country:'Spain', img:"montecarlo.jpg"},
    {id:1, name:"Barcelona", country:'Spain', img:"barcelona.jpg"},
    {id:2, name:"Budapest", country:'Hungary', img:"budapest.jpg"},
    {id:3, name:"Chicago", country:'United State', img:"chicago.jpg"},
    {id:4, name:"Copenhague", country:'Denmark', img:"copenhague.jpg"},
    {id:5, name:"Jerusalen", country:'Israel', img:"jerusalem.jpg"},
    {id:6, name:"London", country:'United Kingdom', img:"londres.jpg"},
    {id:7, name:"Paris", country:'France', img:"paris.jpg"},
    {id:8, name:"Sydney", country:'Australia', img:"sidney.jpg"},
    {id:9, name:"Venice", country:'Italy', img:"venecia.jpg"},
    {id:10, name:"Washington", country:'United State', img:"washington.jpg"},
    {id:11, name:"San Francisco", country:'United State', img:"sanfrancisco.jpg"},
    {id:12, name:"Beijing", country:'China', img:"pekin.jpg"},
    {id:13, name:"La serena", country: 'Chili', img:"laserena.jpg"},
    {id:14, name:"Coquimbo", country: 'Chili', img:"coquimbo.jpg"},
]



const citiesControllers = {
    getCities:(req, res) => {
        res.json({response: cities})
    },
    getOneCity:(req, res) => {
        const id = req.params.id
        const city = cities.find(elem => elem.id.toString() === id)
        //console.log(city)
        res.json({response: city})
    },
    postCities:(req, res) => {
        cities.push(req.body)
        // console.log(cities)
        res.json({response: cities})
    }
}

module.exports = citiesControllers