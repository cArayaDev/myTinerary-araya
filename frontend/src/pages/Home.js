import React from 'react';
// import {Container, Row, Grid} from 'react-bootstrap'
import { Header } from '../components/Header';
import { Carrousel } from '../components/Carrousel';
import { Footer } from '../components/Footer';
import ciudades from '../components/Ciudades';
import { Hero } from '../components/Hero';

class Home extends React.Component{

  render(){
        return (
          <>
            <Header />
            <div className="main animate__animated animate__backInRight">
                    <div className="container">
                        <h1 className="animate__animated animate__backInLeft" id="mytinerary">MyTinerary</h1>
                        <h2 className="animate__animated animate__backInRight">Find your perfect trip,designed by insiders who know and love their cities!.</h2>
                    </div>
                    <a href="#call">click here</a>
            </div>
            <div className="callAction" id="call">
              <Hero />
            <a href="#carrusel">click here</a>
            </div>
            <div className="div_carrusel" id="carrusel">
              <h1>Popular MyTineraries</h1>
                  <Carrousel ciudades={ciudades} />
            </div>
                <Footer />
          </> 
            )
    }
}

export default Home
