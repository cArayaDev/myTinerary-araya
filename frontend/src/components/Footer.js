import React from 'react'
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import insta from '../assets/images/insta1.png'
import twiter from '../assets/images/twiter.jpg'
import face from '../assets/images/face.png'
import watsaap from '../assets/images/whatsapp.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <div className="container_footer">
                <div className="col-4 div_izq">
                    <div className="insta"></div>
                    <div className="twiter"></div>
                    <div className="face"></div>
                    <div className="watsaap"></div>
                </div>
                <div className="col-4 div_cen"><h2>MyTinerary</h2></div>
                <div className="col-4 div_der">
                    <a href=""><Link to="/"><h3 id="navLink">Home</h3></Link></a>
                    <a href=""><Link to="cities"><h3 id="navLink">Cities</h3></Link></a>
                </div>
                <div className="col-12 div_copy"><h3>Mytinerary | © All Rights reserved</h3></div>
            </div>
        </footer>
    )
}
