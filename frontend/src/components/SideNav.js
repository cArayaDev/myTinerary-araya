import React from 'react'
import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css'
import logo from '../assets/images/logo10.png'
import usuario from '../assets/images/usuario1.png'

export const SideNav = () => {
    return (
<Navbar bg="primary" expand="lg" id="navbar">
  <Container fluid>
     <img src={logo}/> 
    {/* <Navbar.Brand href="#"></Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" navbarScroll>
        <Nav.Link href="#"><h3 id="navLink">Home</h3></Nav.Link>
        <Nav.Link href="#action2"><h3 id="navLink">Cities</h3></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <img src={usuario} id="img_usuario"/>
  </Container>
</Navbar>
    )
}
