import React, { Component } from 'react'
// import { InputGroup, FormControl } from 'react-bootstrap'
import { SideNav } from '../components/SideNav'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Cities extends Component {
    constructor(props){
        super(props)
        this.state = { dataCities: [] } 
    }
    componentDidMount(){
        // fetch("http://localhost:4000/api/cities")
        // .then(res => res.json())
        // .then(data => this.setState({dataCities: data.response}))
        // // .then(data => console.log(data))
        // .catch(err => console.log(err))
        axios.get('http://localhost:4000/api/cities')
        .then(res => this.setState({dataCities: res.data.response}))

    }

    // addCities = () => {
        // axios.post('http://localhost:4000/api/cities', { name:"New York", country: "United State", img:"newyork.jpg" })
        // .then(res => this.setState({dataCities:res.data.response}))
        // .then(res => console.log(res.data.response))
    // }

    render() {
        return (
            <div>
                <SideNav />
                <div className="container_cities">
                    <div className="welcome">
                       <h1>Welcome to Cities</h1>
                    </div>
                    <div className="div_input">
                       <input className="form-control form-control-lg input" type="text" placeholder="Search Cities..." />
                    {/* <button className="boton" onClick={this.addCities}>Add City</button> */}
                    </div>
                    <div className="grid-container">
                        {
                            this.state.dataCities.map((elem, i) => {
                                return (
                                    <div className="grid-items" key={i} ciudad={elem.name}>
                                        <Link to={`/city/${elem.id}`}><img className="img" src={require(`../assets/ciudades/${elem.img}`)} alt="First slide" /></Link>
                                    </div>
                                    )
                            })                        
                        }
                    </div>
                </div>
            </div>
        )
    }
}

