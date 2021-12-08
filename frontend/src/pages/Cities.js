import React, { Component } from 'react'
import { SideNav } from '../components/SideNav'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer';
import { connect } from 'react-redux'
import cityActions from '../redux/actions/cityActions';

class Cities extends Component {
    componentDidMount(){
        this.props.dataCities()
    }
    render() {
        return (
            <div>
                <SideNav />
                <div className="container_cities">
                    <div className="welcome">
                       <h1>MyTinerary</h1>
                    </div>
                    <div className="div_input">
                       <form onChange={ (e)=> this.props.dataFilter(this.props.auxCities, e.target.value) }>
                           <input className="form-control form-control-lg input" ref={this.inputValue} type="text" placeholder="Search Cities..." />
                       </form>
                    </div>
                    <div className="grid-container">
                        {
                           (this.props.cities.length !== 0) ? 
                            this.props.cities.map((elem, i) => {
                             return (
                                    <div className="grid-items" key={i} ciudad={elem.name}>
                                        <div className="centerTitle"><h2>{elem.name}</h2></div>
                                        <Link to={`/city/${elem._id}`} className="link_items">
                                            <img 
                                                className="img" 
                                                src={require(`../assets/ciudades/${elem.img}`)} 
                                                alt="First slide" 
                                                // onClick={ (e)=> this.props.oneCity(elem._id) }
                                            />
                                        </Link>
                                    </div>
                                    )
                            }) :
                                <div className="no_data">
                                   <h2>City not found...</h2>
                                </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = {
    dataCities: cityActions.getCities,  //cityActions y getCities vienen del archivo cityActios.js
    dataFilter: cityActions.filterCities,
    // oneCity: cityActions.getOneCity,
    
  }
  const mapStateToProps = (state) => {
    //    console.log(state)
    return { cities:state.cityReducer.cities,
             auxCities: state.cityReducer.auxCities,
            }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Cities)
