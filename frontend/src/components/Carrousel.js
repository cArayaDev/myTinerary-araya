import React from 'react'
import Slider from "react-slick";



export const Carrousel = ({ciudades}) => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
      return (
        <Slider {...settings}>
            {
              ciudades.map((elem, i) => {
                  return (
                      <div className="row" key={i}>
                        {/* <a href="#" className="test"> */}
                          <img className="d-block w-100 center transition" src={require(`../assets/ciudades/${elem.ruta}`)} alt="First slide" />
                        {/* </a> */}
                          <h2 id="ciudad">{elem.nombre}</h2>
                  </div>
                )
              })
            }
        </Slider>
      );
}
