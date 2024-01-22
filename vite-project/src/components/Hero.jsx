import React from 'react';
import '../styles/hero.css';
import translogo from '../assets/cinesnap-logo-transparent.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
    const heroAnimation = useSpring({
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { tension: 120, friction: 10 },
      });

  return (
    <div className='hero-content'>
        <animated.div style={heroAnimation}>
            <Container className='hero-main-container'>
                <Row>
                    <Col xs={12} className="hero-image">
                        <img src={translogo} width='50%'>
                        </img>
                    </Col>
                    <Col xs className="hero-subtitle">
                        Movie reviews at your fingertips.
                    </Col>
                </Row>
            </Container>
        </animated.div>
    </div>
  )
}

export default Hero;
