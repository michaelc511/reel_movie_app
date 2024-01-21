import React, { useState, useEffect } from 'react';
import "../styles/home.css";
import MovieCard from './MovieCard';
import { useSpring, animated } from 'react-spring';

const Discover = () => {
  const [movies, setMovies] = useState([]);

  const discoverAnimation = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 120, friction: 10 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=3fe6e2d7a2453a35fe3498108ffc5dd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );

        if (!response.ok) {
          throw new Error('Network response is not working');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <animated.div style={discoverAnimation}>
        <div className='home-content'>
          <h1 style={{ fontSize: '2rem', color: '#2F455C' }}>Discover</h1>
          <MovieCard movies={movies} /> 
        </div>
      </animated.div>
    </>
  );
};

export default Discover;
