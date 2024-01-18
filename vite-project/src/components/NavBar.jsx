import React from 'react';
import '../styles/navbar.css';
import smlogo from '../assets/cinesnap-white-logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <Container className='custom-container' fluid>
      <Navbar collapseOnSelect expand='xl' bg='navbar-background' data-bs-theme='dark' className='navbar-background' sticky='top'>
        <Container className='mx-auto'>
          <Navbar.Brand href='#home' className="text-center">
            <img
              src={smlogo}
              width='70%'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' className='ms-auto' />
          <Navbar.Collapse id='responsive-navbar-nav' className='text-center justify-content-center'>
            <Nav className='me-auto text-center'>
              <Nav.Link href='#discover'>Discover</Nav.Link>
              <Nav.Link href='#toprated'>Top Rated</Nav.Link>
              <Nav.Link href='#upcoming'>Upcoming</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder=""
                className="me-2"
                aria-label="Search"
                style={{ backgroundColor: '#fff', color: '#2F455C', borderRadius: '25px' }}
              />
              <Button variant="secondary" style={{ borderRadius: '25px' }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavBar;
