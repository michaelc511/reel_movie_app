import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css';

const MovieCard = ({ movies }) => {
  const truncateOverview = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }
    return text;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className='mx-auto'>
        <Container fluid>
          <Row xs={1} sm={2} md={3} lg={4}>
            {movies.map((movie) => (
              <Col key={movie.id} className='align-items-center justify-content-center mb-3'>
                <Card style={{ width: '100%', border: '0', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
                  <Card.Img 
                    variant="top" 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    style={{ alignContent: 'center' }} 
                  />
                  <Card.Body style={{ height: '100%', textAlign: 'center' }}>
                    <Card.Title>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2F455C' }}>
                        {movie.title}
                      </h2>
                    </Card.Title>
                    <Card.Text style={{ fontSize: '.85rem' }}>
                      {truncateOverview(movie.overview, 150)}
                      <br /><br />
                      <b>Release Date:</b> {formatDate(movie.release_date)}
                      <br /><br />
                      <b>Star Rating:</b> {movie.vote_average}
                      <br />
                    </Card.Text>
                    <Button variant="secondary">Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="copyright">
        © 2024 Cinesnap Movie Review App by shannaCodes.
      </div>
    </>
  );
};

export default MovieCard;
