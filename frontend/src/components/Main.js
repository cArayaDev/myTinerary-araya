import React from 'react'
import { Carrousel } from './Carrousel'
import '../styles/style.css'

export const Main = () => {
    return (
        <div className="container">
            <div className="capa-gradient"></div>
            <div className="container_details">
                <div className="datails">
                <h1>MyTinerai</h1>
                <h2>Find your perfect trip,designed by insiders who know and love their cities!.</h2>
                </div>
            </div>
            {/* <Carrousel /> */}
        </div>
    )
}
