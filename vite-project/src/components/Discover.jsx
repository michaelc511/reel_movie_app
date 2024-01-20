import React, { useState, useEffect } from 'react';
import "../styles/home.css";
import MovieCard from './MovieCard';

const Discover = () => {
  const [movies, setMovies] = useState([]);

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
      <div className='home-content'>
        <h1 style={{ fontSize: '2rem', color: '#2F455C' }}>Discover</h1>
        <MovieCard movies={movies} /> 
      </div>
    </>
  );
};

export default Discover;
