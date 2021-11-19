import React from 'react'
import Slider from "react-slick";
import Carousel from 'react-bootstrap/Carousel'
import washington from '../assets/ciudades/washington.jpg'
import copenhague from '../assets/ciudades/copenhague.jpg'
import jerusalem from '../assets/ciudades/jerusalem.jpg'
import barcelona from '../assets/ciudades/barcelona.jpg'
import paris from '../assets/ciudades/paris.jpg'
import '../styles/style.css'

export const Carrousel = () => {
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
          <div className="row">
            <img className="d-block w-100 center transition" src={washington} alt="First slide" />
            <h2>Washington</h2>
          </div>
          <div className="row">
            <img className="d-block w-100 center transition" src={paris} alt="First slide" />
            <h2>Paris</h2>
          </div>
          <div className="row">
            <img className="d-block w-100 center transition" src={barcelona} alt="First slide" />
            <h2>Barcelona</h2>
          </div>
          <div className="row">
            <img className="d-block w-100 center transition" src={jerusalem} alt="First slide" />
            <h2>Jerusalem</h2>
          </div>
          <div className="row">
            <img className="d-block w-100 center transition" src={copenhague} alt="First slide" />
          </div>
          <div className="row">
          <img className="d-block w-100 center transition" src={washington} alt="First slide" />
          </div>
          <div className="row">
          <img className="d-block w-100 center transition" src={jerusalem} alt="First slide" />
          </div>
          <div className="row">
          <img className="d-block w-100 center transition" src={copenhague} alt="First slide" />
          </div>
          <div className="row">
          <img className="d-block w-100 center transition" src={jerusalem} alt="First slide" />
          </div>
          <div className="row">
          <img className="d-block w-100 center transition" src={washington} alt="First slide" />
          </div> 
          <div className="row">
          <img className="d-block w-100 center transition" src={copenhague} alt="First slide" />
          </div>
          <div className="row">
          <img className="d-block w-100 center transition" src={jerusalem} alt="First slide" />
          </div>       
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
