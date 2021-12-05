import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { SideNav } from './SideNav';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Itineraries } from './Itineraries';
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions';

const City = ({cities, dataItinerary, itineraries}) => {
    const [city, setCity] = useState({cities})
    let { id } = useParams();
    
    useEffect(() => {
        dataItinerary()
        const cityFilter = cities.filter((elem) => {
            if(elem._id === id){
                setCity(elem)
            }
        })
    },[])
    // console.log(itineraries)
   return (
         cities &&
       <div className="container_city">
            <SideNav />
            <div className="" ciudad={ city.name}>
               { city.img && <img className="img_city" src={require('../assets/ciudades/'+city.img)} alt="First slide" /> }
            </div>
           <Itineraries itineraries={ itineraries }/>
            <Link to="/cities" className="link_btn"><div><button className="btn_back">Back to Cities</button></div></Link>
            <Footer />
        </div>
    )
}
const mapDispatchToProps = {
    dataItinerary: itineraryActions.getItineraries
}

const mapStateToProps = (state) => {
    // console.log(state)
    return { 
        cities: state.cityReducer.cities, 
        itineraries: state.itineraryReducer.itineraries 
    }
    // console.log(state)
  }

export default connect(mapStateToProps, mapDispatchToProps)(City)
