import React from 'react'
import Slider from "react-slick";
import '../styles/style.css'


export const Carrousel = ({ciudades}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
  
      };
      return (
        <Slider {...settings}>
            {
              ciudades.map((elem, i) => {
                let imagen = require(`../assets/ciudades/${elem.ruta}`)
                return (
                      <div className="row" key={i}>
                          <img className="d-block w-100 center transition" src={require(`../assets/ciudades/${elem.ruta}`)} alt="First slide" />
                          <h2>{elem.nombre}</h2>
                      </div>                  
                )
              })
            }
        </Slider>
      );
   
    
    // return (
        // <Carousel fade>
          //   <Carousel.Item>
          //   <img
          //       className="d-block w-50 center"
          //       src={washington}
          //       alt="First slide"
          //     />
          //   <img
          //       className="d-block w-50 center"
          //       src={washington}
          //       alt="First slide"
          //     />
          //   <img
          //       className="d-block w-50 center"
          //       src={washington}
          //       alt="First slide"
          //     />
          //   <img
          //       className="d-block w-50 center"
          //       src={washington}
          //       alt="First slide"
          //     />

          //     <Carousel.Caption>
          //       <h3>Washington D.C.</h3>
          //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          //     </Carousel.Caption>
          //   </Carousel.Item>
          //   <Carousel.Item>
          //     <img
          //       className="d-block w-50"
          //       src={jerusalem}
          //       alt="Second slide"
          //     />
          //     <Carousel.Caption>
          //       <h3>Second slide label</h3>
          //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          //     </Carousel.Caption>
          //   </Carousel.Item>
          //   <Carousel.Item>
          //     <img
          //       className="d-block w-50"
          //       src={copenhague}
          //       alt="Third slide"
          //     />
          //     <Carousel.Caption>
          //       <h3>Third slide label</h3>
          //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          //     </Carousel.Caption>
          //   </Carousel.Item>
          // </Carousel>
    // )
}
