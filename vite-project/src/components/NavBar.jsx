import React from 'react';
import '../styles/navbar.css';
import smlogo from '../assets/cinesnap-white-logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Container className='custom-container' fluid>
      <Navbar expand='lg' bg='navbar-background' data-bs-theme='dark' className='navbar-background' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src={smlogo}
              width='40%'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-auto' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#discover'>Discover</Nav.Link>
              <Nav.Link href='#toprated'>Top Rated</Nav.Link>
              <Nav.Link href='#upcoming'>Upcoming</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavBar;
