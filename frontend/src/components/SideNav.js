import React from 'react'
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/images/logo30.jpg'
import usuario from '../assets/images/usuario1.png'
import { Link } from 'react-router-dom'
import authActions from '../redux/actions/authActions'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

 const SideNav = ({logout, oneUser }) => {

    const handleLogout = () => {
      logout()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Goodbie!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    // console.log(oneUser)
    return (
        <Navbar bg="primary" expand="lg" id="navbar">
          <Container fluid>
            <img src={logo} id="logo" alt="logo"/> 
            <Navbar id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 navMenu" navbarScroll>
                <Link to="/"><h3 id="navLink">Home</h3></Link>
                <Link to="/cities"><h3 id="navLink2">Cities</h3></Link>
            {oneUser.name &&   <Link to="/" onClick={ ()=>handleLogout() }><h3 id="navLink2">Sign Out</h3></Link>} 
              </Nav>
            </Navbar>
            {!oneUser.name ?
            <Dropdown id="dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src={usuario} id="img_usuario" alt="imagen usuario"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/signup">Sign Up</Dropdown.Item>
              <Dropdown.Item as={Link} to="/signin">Sign In</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            :  oneUser.photo && <img src={ oneUser.photo } alt="img usuario" className="img_user_nav"/>
            
            }
          </Container>
        </Navbar>
    )
}
const mapStateToProps = (state) =>{
  // console.log(state)
  return {
      oneUser: state.authReducer.oneUser,
  }
}
  const mapDispatchToProps = {
      logInPersistent: authActions.logInPersistent,
      logout: authActions.logout
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
