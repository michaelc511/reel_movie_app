// here I will add some boostrap to make this look better
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBars.css";
import { Link } from 'react-router-dom';

export default function NavigationBar(){

  return(
    <Navbar sticky="top" expand="lg">
      <Container className=''>
        <Nav className="navbar justify-content-space-around bg-body-tertiary">
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/topRated">TopRated</Link>
          <Link to="/upComing">Upcoming </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

