import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

interface Movie {
  id:number,
  title:string 
  poster_path:string
}

// Movies card component
function MovieCard(movie:Movie){
  const [display, setDisplay] = useState('')

  return(
    <div className="card">

        <img src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`} className="image"  />
        
        <h2>{movie.movie.title}</h2>

        <button className="button" onClick={() => setDisplay((display) => display === '' ? 'Clicked view details button' : '')}>
          Details & Review
        </button>
        <div>{display}</div>
      </div>
  )
} 


function App() {
  const [movies, setMovies] = useState([])

  // Movies API
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE",
    },
  };

  useEffect(() => {
    // Get movies
    fetch(url,options)
    .then((resp)=> {return resp.json()})
    .then((data)=> {
      return setMovies(data['results'])
    })
    
  });

  return ( 
    <>
      <h1>Home Page</h1>
      <div className="cards-container">
      {movies ? ( 
        movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)
        ): <div>loading</div>
      }
  
      </div>
    </>
  )
}

export default App
