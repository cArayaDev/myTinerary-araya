import React, { useEffect } from 'react'
import { useParams } from "react-router"
import  SideNav  from './SideNav'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import  Itineraries from './Itineraries'
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions'
import cityActions from '../redux/actions/cityActions'
// import itineraryActions from '../redux/actions/itineraryActions'

const City = ({oneCity, dataOneCity, dataItinerary, getItineraryByCity, itineraryByCity}) => {
    let { id } = useParams();
    
    useEffect(() => {
         oneCity(id)
         dataItinerary()
        getItineraryByCity(id)
    },[])

    // console.log(likesCurrent)
    return (
        (!dataOneCity) ? <div><h1>cargando...</h1></div> :
       <div className="container_city">
            <SideNav />
            <div className="img_city" ciudad={ dataOneCity.name}>
               { dataOneCity.img && <img className="img_city" src={dataOneCity.img} alt="First slide" /> }
            </div>
            {
                
                itineraryByCity.length !== 0 ? 
                itineraryByCity.map((elem, i) => {
                     return <Itineraries itineraries={ elem } ciudad={ dataOneCity.img } key={ i }/>
                }) : <h2 className="noItineraries">Not Itineraries</h2>
            }
            <Link to="/cities" className="link_btn"><div><button className="btn_back">Back to Cities</button></div></Link>
            <Footer />
        </div>  
        
    )
}
const mapDispatchToProps = {
    dataCities: cityActions.getCities,
    dataItinerary: itineraryActions.getItineraries,
    oneCity: cityActions.getOneCity,
    getItineraryByCity: itineraryActions.itineraryByCity
}

const mapStateToProps = (state) => {
    //  console.log(state)
    return { 
        // itineraries: state.itineraryReducer.itineraries,
        dataOneCity: state.cityReducer.oneCity,
        itineraryByCity: state.itineraryReducer.itineraryByCity,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(City)
