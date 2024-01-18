import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css';

const MovieCard = () => {
  return (
    <>
    <div className='mx-auto'>
        <Container fluid>
          <Row>
            <Col className='align-items-center justify-content-center'>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" style= {{ alignContent: 'center' }}/>
                <Card.Body>
                  <Card.Title>Movie Title</Card.Title>
                  <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid quae quam tempore iste odio molestiae doloribus voluptas mollitia, sed, molestias nulla aperiam voluptate accusamus nesciunt recusandae repellat rem in.
                      <br /><br />
                      Star Rating:
                      <br /><br />
                  </Card.Text>
                  <Button variant="secondary">Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='align-items-center justify-content-center'>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" style= {{ alignContent: 'center' }}/>
                <Card.Body>
                  <Card.Title>Movie Title</Card.Title>
                  <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid quae quam tempore iste odio molestiae doloribus voluptas mollitia, sed, molestias nulla aperiam voluptate accusamus nesciunt recusandae repellat rem in.
                      <br /><br />
                      Star Rating:
                      <br /><br />
                  </Card.Text>
                  <Button variant="secondary">Details</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='align-items-center justify-content-center'>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" style= {{ alignContent: 'center' }}/>
                <Card.Body>
                  <Card.Title>Movie Title</Card.Title>
                  <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquid quae quam tempore iste odio molestiae doloribus voluptas mollitia, sed, molestias nulla aperiam voluptate accusamus nesciunt recusandae repellat rem in.
                      <br /><br />
                      Star Rating:
                      <br /><br />
                  </Card.Text>
                  <Button variant="secondary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
    <div className="copyright">
    © 2024 Cinesnap Movie Review App by shannaCodes.
    </div>
    </>
  )
}

export default MovieCard;
