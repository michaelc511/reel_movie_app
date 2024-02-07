import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState('')
  const [movies, setMovies] = useState(null)

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
      console.log('movies >>>', data)
      return setMovies(data)
    })
  });

  return (
    <>
      <div>
        
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>
          Movie description goes here
        </p>
        <button onClick={() => setDisplay((display) => display === '' ? 'Clicked view details button' : '')}>
          Details & Review
        </button>
        <div>{display}</div>
        
      </div>
      <div className="card">
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
        <p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        Edit <code>src/App.tsx</code> and save to test HMR
        </div>
          
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
