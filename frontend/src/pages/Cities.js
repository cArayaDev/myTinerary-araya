import React, { Component } from 'react'
import { SideNav } from '../components/SideNav'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer';

export default class Cities extends Component {
    constructor(props){
        super(props)
        this.state = { 
            dataCities: [],
            dataFilterCities: [],
            inputValue: '',
            isActive: null
        } 
        this.inputValue = React.createRef();
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount(){
         axios.get('http://localhost:4000/api/cities')
        .then((res) => {
            this.setState({dataCities: res.data.response})
            this.setState({dataFilterCities: res.data.response})
        })
    }
    handleSearch() {
        let filterCity = this.handleFilter(this.state.dataCities, this.inputValue.current.value)
        this.setState({dataFilterCities: filterCity})
        // this.setState({isActivo: })
        // (filterCity.length === 0) && this.setState({isActivo: false}) 
 
        console.log(filterCity.length)
    }

    handleFilter(city, valor) {
        let dataFilter = city.filter((elem) => { return elem.name.toLowerCase().startsWith(valor.trim().toLowerCase())})
        return dataFilter
    }

    render() {
 
        console.log(this.state.isActive)
        return (
            <div>
                <SideNav />
                <div className="container_cities">
                    <div className="welcome">
                       <h1>MyTinerary</h1>
                    </div>
                    <div className="div_input">
                       <form onChange={this.handleSearch}>
                           <input className="form-control form-control-lg input" ref={this.inputValue} type="text" placeholder="Search Cities..." />
                       </form>
                    </div>
                    <div className="grid-container">
                        {
                           this.state.dataFilterCities &&
                           (this.state.dataFilterCities.length != 0) ? 
                           this.state.dataFilterCities.map((elem, i) => {
                                return (
                                    <div className="grid-items" key={i} ciudad={elem.name}>
                                        <Link to={`/city/${elem._id}`} className="link_items"><img className="img" src={require(`../assets/ciudades/${elem.img}`)} alt="First slide" /></Link>
                                    </div>
                                    )
                            }) : <h2>No data......</h2>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

