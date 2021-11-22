import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
// import brujula from '../assets/images/click.jpeg'
import click from '../assets/images/click.jpeg'


export const Hero = () => {
    return (
      <div className="container_mapa">
        <div className="col-4"><h3>The experience begins now</h3></div>
        <div className="col-3 mapa">
          <a className="a_click_here" href=""><img src={click} className="img_click" alt="btn click" /></a>
        </div>
        <div className="col-4"><h3>The experience begins now</h3></div>
      </div>


  // <Row>
  //   <Col xs lg="4">
  //       <h3>The experience begins now</h3>
  //   </Col>
  //   <Col lg="3" className="mapa"><a className="a_click_here" href="" ><Col><img src={click} className="img_click" alt="btn click" /></Col> </a></Col>
  //   <Col xs lg="3">
  //     3 of 3
  //   </Col>
  // </Row>




        // <div className="click justify-content-md-center">
        //     <div className="mapa">
        //    <a className="a_click_here" href="" ><img src={click} className="img_click" alt="btn click" /></a>
        //     </div>
        // </div>
    )
}
