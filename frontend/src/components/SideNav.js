import React from 'react'
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/images/logo30.jpg'
import usuario from '../assets/images/usuario1.png'
import { Link } from 'react-router-dom'

export const SideNav = () => {
    return (
<Navbar bg="primary" expand="lg" id="navbar">
  <Container fluid>
     <img src={logo} id="logo" alt="logo"/> 
    <Navbar id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0 navMenu" navbarScroll>
        <Link to="/"><h3 id="navLink">Home</h3></Link>
        <Link to="/cities"><h3 id="navLink2">Cities</h3></Link> 
      </Nav>
    </Navbar>
    <Dropdown id="dropdown">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <img src={usuario} id="img_usuario" alt="imagen usuario"/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sign Up</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sign In</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>    
  </Container>
</Navbar>
    )
}
