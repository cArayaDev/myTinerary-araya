import React, { Component } from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { SideNav } from '../components/SideNav'

export default class Cities extends Component {
    constructor(props){
        super(props)
        this.state = { dataCities: [] } 
    }
    componentDidMount(){
        fetch("http://localhost:4000/api/cities")
        .then(res => res.json())
        .then(data => this.setState({dataCities: data.response}))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <SideNav />
                <div className="container_cities">
                    <div className="welcome">
                    <h1>Welcome to Cities</h1>
                    </div>
                    <div>
                        {
                            this.state.dataCities.map((elem, i) => {
                                return (
                                    <div className="row align-items-start" key={i}>
                                        <div className="col">
                                        <img className="img" src={require(`../assets/ciudades/${elem.img}`)} alt="First slide" />
                                        </div>
                                        <h2 id="ciudad">{elem.name}</h2>
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

