import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import { SideNav } from './SideNav';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

export const City = () => {
    const [city, setCity] = useState([])
    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/city/'+id)
        .then(res => setCity([res.data.response]))
    },[])
    return (
        <div>
            <SideNav />
            <h1>Bienvenido a City</h1>
            {
                city.map((elem, i) => {
                    return (
                        <div className="grid-items" key={i} ciudad={elem.name}>
                        <Link to={`/city/${elem.id}`}><img className="img" src={require(`../assets/ciudades/${elem.img}`)} alt="First slide" /></Link>
                    </div>
                    )
                })
            }
           <Link to="/cities"><Button>cities</Button></Link>
            <h1>Under construction</h1>
        </div>
    )
}
