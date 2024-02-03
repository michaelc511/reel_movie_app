// here I will add some boostrap to make this look better
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBars.css"

export default function NavigationBar(){

  return(
    <Navbar sticky="top" expand="lg">
      <Container>
        <Nav className="navbar justify-content-center bg-body-tertiary">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#discover">Discover</Nav.Link>
          <Nav.Link href="#topRated">TopRated</Nav.Link>
          <Nav.Link href="#upComing">Upcoming </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}


      /*<ul>
      <li>home</li>
        <li>discover</li>
        <li>TopRated</li>
        <li>upcoming</li>
      </ul> */
/*
<Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
*/