import { useEffect, useContext } from "react";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "../search.svg";
import { MovieContext } from "../utils/contextAPI/MovieContext.jsx";
import getData from "../utils/hooks/getData.js";
import { Link } from "react-router-dom";

const MoviePage = ({ theSection }) => {
  const {
    searchTerm,
    setSearchTerm,
    section,
    movies,
    setRunSearch,
    setSection,
  } = useContext(MovieContext);

  setSection(theSection);

  useEffect(() => {
    setRunSearch(true);
    setSection(section);
  }, [section]);

  const handleButtonClick = () => {
 
    setSearchTerm(
      document.getElementsByName("searchTermField")[0].value
    );
    setRunSearch(true);
  };

  const changeSection = (section) => {
    setRunSearch(true);
    setSection(section);
  };

  let errorMsg = getData();

  return (
    <div className="app">
      <h1>Movie App</h1>
      <h2>{section}</h2>
      <div className="container">
        <h3>
          <Link
            className={
              section === "Discover" ? "link-selected" : "link-unselected"
            }
            to="/"
          >
            Discover
          </Link>
        </h3>
        |
        <h3>
          <Link
            className={
              section === "Top Rated" ? "link-selected" : "link-unselected"
            }
            to="/top-rated"
          >
            Top Rated
          </Link>
        </h3>
        |
        <h3>
          <Link
            className={
              section === "Upcoming" ? "link-selected" : "link-unselected"
            }
            to="/upcoming"
          >
            Upcoming
          </Link>
        </h3>
      </div>
      {/* <form>
        <div className="search">
          <input
            value={searchTerm}
            name="searchTermField"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={handleButtonClick}
          />
        </div>
      </form> */}

      {movies ? (
        <div className="container">
          {movies.results.map((movie) => (
            <MovieCard
              movieTitle={movie.title}
              key={movie.id}
              moviePoster={movie.poster_path}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found </h2>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
