import React from 'react';
// import { Main } from '../components/Main';
import { Header } from '../components/Header';
// import { Carrousel } from '../components/Carrousel';
import { SideNav } from '../components/SideNav';
import { Footer } from '../components/Footer';

class Home extends React.Component{
    render(){
        return (
          <>
            <Header />
            <main className="main">
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

                </main>
                <Footer />
            {/* <Main /> */}
          </> 
            )
    }
}

export default Home
