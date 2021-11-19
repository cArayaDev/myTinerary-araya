import React from 'react';
// import { Main } from '../components/Main';
import { Header } from '../components/Header';
import { Carrousel } from '../components/Carrousel';
// import { SideNav } from '../components/SideNav';
import { Footer } from '../components/Footer';

class Home extends React.Component{
    render(){
        return (
          <>
            <Header />
            <div className="main">
              <div className="container">
                {/* <div className="capa-gradient"></div> */}
                  {/* <div className="container_details"> */}
                      {/* <div className="details"> */}
                        <h1>MyTinerai</h1>
                        <h2>Find your perfect trip,designed by insiders who know and love their cities!.</h2>
                      {/* </div> */}
                  {/* </div> */}
              </div>
            </div>
            <div className="call">
            </div>
            <div className="div_burbujas">
              {/* <div className="burbujas">
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
                  <div className="burbuja"></div>
              </div> */}
            </div>
            <div className="div_carrusel">

                  <Carrousel />
            </div>
                <Footer />
            {/* <Main /> */}
          </> 
            )
    }
}

export default Home
