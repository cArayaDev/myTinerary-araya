import React from 'react'
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import insta from '../assets/images/insta1.png'
import twiter from '../assets/images/twiter.jpg'
import face from '../assets/images/face.png'
import watsaap from '../assets/images/whatsapp.png'

export const Footer = () => {
    return (
        <footer>
            <div className="container_footer">
                <div className="col-4 div_der">
                    <div className="insta"></div>
                    <div className="twiter"></div>
                    <div className="face"></div>
                    <div className="watsaap"></div>
                </div>
                <div className="col-4 div_cen"><h2>MyTinerary</h2></div>
                <div className="col-4 div_izq">
                    <a href=""><h1>Home</h1></a>
                    <a href=""><h1>Cities</h1></a>

                </div>
                <div className="col-12 div_copy"><h3>Mytinerary | © All Rights reserved</h3></div>
            </div>
        </footer>
    )
}
