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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
          <Nav.Link href="/topRated">TopRated</Nav.Link>
          <Nav.Link href="/upComing">Upcoming </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

