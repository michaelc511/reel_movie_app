import "./HeroCards.css"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

export default function HeroCards(){

  return(
    <div className="hero-card-container">
      <Card className="hero-card" as={Link} to="/discover">
        <Card.Title>Discover</Card.Title>
      </Card>
      <Card className="hero-card" as={Link} to="/discover">
        <Card.Title>TopRated</Card.Title>
      </Card>
      <Card className="hero-card" as={Link} to="/upcoming">
        <Card.Title>Upcoming</Card.Title>
      </Card>

    </div>
  )
}