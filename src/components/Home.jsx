import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import "../App.css";
import SearchIcon from "../search.svg";

// Test data

const movie1 = {
  Title: "Spiderman",
  Year: "2021",
  imdbID: "12131231",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("2023");
  }, []);

  const API_URL = "http://www.omdbapi.com/?apikey=";

  // using async and await
  const searchMovies = async (title) => {
    const url = `${API_URL}${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${title}`;

    const response = await fetch(url);

    const data = await response.json();

    setMovies(data.Search);
    console.log("url:", url);
    console.log(movies);
  };

  // using .then and .catch
  const searchMovies2 = (title) => {
    const url = `${API_URL}${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${title}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.Search);
      })
      .catch((e) => {
        console.log("Error:", e);
      });
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.imdbID}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found {movies?.Search}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
