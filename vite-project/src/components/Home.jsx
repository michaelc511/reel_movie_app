import React from 'react';
import "../styles/home.css";
import MovieCard from './MovieCard';

const Home = () => {
  return (
    <>
      <div className='home-content'>
        <h1>Discover</h1>
        <MovieCard />
      </div>
    </>
  )
}

export default Home;
