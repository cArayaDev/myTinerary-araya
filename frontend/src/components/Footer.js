import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <div className="container_footer">
                <div className="col-4 div_izq">
                <a href="https://www.instagram.com/?hl=es" target="_blank"><div className="insta"></div></a>
                <a href="https://twitter.com/?lang=es" target="_blank"><div className="twiter"></div></a>
                <a href="https://es-la.facebook.com/" target="_blank"><div className="face"></div></a>
                <a href="https://web.whatsapp.com/" target="_blank"><div className="watsaap"></div></a>
                </div>
                <div className="col-4 div_cen"><h2>MyTinerary</h2></div>
                <div className="col-4 div_der">
                    <Link to="/" style={{ textDecoration: 'none' }}><h3 id="navLinkFooter">Home</h3></Link>
                    <Link to="cities" style={{ textDecoration: 'none' }}><h3 id="navLink">Cities</h3></Link>
                </div>
                <div className="col-12 div_copy"><h4>Mytinerary | © All Rights reserved</h4></div>
            </div>
        </footer>
    )
}
