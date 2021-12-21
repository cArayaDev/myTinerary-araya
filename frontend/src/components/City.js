import React, { useEffect } from 'react'
import { useParams } from "react-router";
import  SideNav  from './SideNav';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import  Itineraries from './Itineraries';
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions';
import cityActions from '../redux/actions/cityActions'

const City = ({oneCity, dataOneCity, dataItinerary, itineraries}) => {
    let { id } = useParams();
    useEffect(() => {
        oneCity(id)
        dataItinerary()
    },[])
    
    return (
        (!dataOneCity) ? <div><h1>cargando...</h1></div> :
       <div className="container_city">
            <SideNav />
            <div className="img_city" ciudad={ dataOneCity.name}>
               { dataOneCity.img && <img className="img_city" src={require('../assets/ciudades/'+dataOneCity.img)} alt="First slide" /> }
            </div>
            {
                // console.log(itineraries)
                (itineraries.length !== 0) && 
                itineraries.map((elem, i) => {
                    if(elem.city._id === id){
                     return <Itineraries itineraries={ elem } ciudad={ dataOneCity.img} key={i}/>
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
    dataItinerary: itineraryActions.getItineraries,
    oneCity: cityActions.getOneCity,
}

const mapStateToProps = (state) => {
    //  console.log(state)
    return { 
        itineraries: state.itineraryReducer.itineraries,
        dataOneCity: state.cityReducer.oneCity

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(City)
