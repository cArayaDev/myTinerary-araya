import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import { SideNav } from './SideNav';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

export const City = () => {
    const [city, setCity] = useState({})
    let { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:4000/api/city/'+id)
        .then(res => setCity(res.data.response))
    },[])
   return (
       city &&
        <div className="container_city">
            <SideNav />
            {/* <h1>Bienvenido a City</h1> */}
            <div className="grid-items" ciudad={ city.name}>
               { city.img && <img className="img" src={require('../assets/ciudades/'+city.img)} alt="First slide" /> }
            </div>
            <Link to="/cities" className="btn_back"><button className="btn_back">Back to Cities</button></Link>
            <h1>Under construction</h1>
        </div>
    )
}
