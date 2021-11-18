import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import washington from '../assets/images/santorini5.jpg'
import copenhague from '../assets/images/copenhague.jpg'
import jerusalem from '../assets/images/jerusalem.jpg'
import '../styles/style.css'

export const Carrousel = () => {
    return (
          <Carousel fade>
            <Carousel.Item>
            <img
                className="d-block w-50 center"
                src={washington}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Washington D.C.</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={jerusalem}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src={copenhague}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    )
}
