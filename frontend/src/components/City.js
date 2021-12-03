import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { SideNav } from './SideNav';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Itineraries } from './Itineraries';
import { connect } from 'react-redux'

const City = ({cities}) => {
    const [city, setCity] = useState({cities})
    let { id } = useParams();
    
    useEffect(() => {
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
            <div className="grid-items" ciudad={ city.name}>
               { city.img && <img className="img" src={require('../assets/ciudades/'+city.img)} alt="First slide" /> }
            </div>
           <Itineraries />
            <Link to="/cities" className="btn_back"><button className="btn_back">Back to Cities</button></Link>
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => {
    return { cities:state.cityReducer.cities }
    // console.log(state)
  }

export default connect(mapStateToProps)(City)
