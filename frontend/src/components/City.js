import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { SideNav } from './SideNav';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Itineraries } from './Itineraries';
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions';
import cityActions from '../redux/actions/cityActions'

const City = ({cities, dataCities, dataItinerary, itineraries}) => {
    const [city, setCity] = useState(cities)
    const [isControl, setControl] = useState(true)
    let { id } = useParams();
    // console.log(itineraries)
    useEffect(() => {
        dataItinerary()
        dataCities()
        const cityFilter = cities.filter((elem) => {
            if(elem._id === id){
                setCity(elem)
            }
        })
    },[])
   return (
         cities &&
       <div className="container_city">
            <SideNav />
            <div className="" ciudad={ city.name}>
               { city.img && <img className="img_city" src={require('../assets/ciudades/'+city.img)} alt="First slide" /> }
            </div>
            {
                (itineraries.length !== 0) && 
                itineraries.map((elem, i) => {
                    if(elem.city[0]._id === id){
                     return   <Itineraries itineraries={ elem } key={i}/>
                        // console.log(elem)
                    }else{
                       
                       return null
                       
                    }
        
                })

            }
            <Link to="/cities" className="link_btn"><div><button className="btn_back">Back to Cities</button></div></Link>
            <Footer />
        </div>
    )
}
const mapDispatchToProps = {
    dataCities: cityActions.getCities,
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
