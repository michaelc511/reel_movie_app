// here I will add some boostrap to make this look better
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavigationBars.css";
import { Link } from 'react-router-dom';

export default function NavigationBar(){

  return(
    <Navbar sticky="top" expand="lg">
        <Nav className="navbar-container">
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="/discover">Discover</Link>
          <Link className='nav-item' to="/topRated">TopRated</Link>
          <Link className='nav-item' to="/upComing">Upcoming </Link>
        </Nav>
    </Navbar>
  )
}

