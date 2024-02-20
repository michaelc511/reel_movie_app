import React, { useEffect, useContext } from "react";
import { MovieContext } from "../contextAPI/MovieContext";

const getData = () => {
  /*
    1. useEffect() runs wheren there's changes in searchTerm or runSearch
    2. searchMovies() fetches the data from the API using omdbapi
    3. searchMovies2() fetches the data from the API using themoviedb
  */

  // use context
  const {
    searchTerm,
    runSearch,
    setRunSearch,
    movies,
    setMovies,
    source,
    setSource,
    section,
    setSection,
  } = useContext(MovieContext);
  let errorMsg = null;

  // 1. useEffect() -> searchMovies()
  useEffect(() => {
    if (runSearch) {
      console.log("Run the search");
      searchMovies2();
      setRunSearch(false);
    } else {
      console.log("not run the search");
    }
  }, [searchTerm, runSearch, section]);

  // 2. SearchMovies() setMovies()
  const searchMovies = () => {
    const API_URL = "http://www.omdbapi.com/?apikey=";
    const url = `${API_URL}${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          errorMsg = data.Error;
        }
        console.log("movies suc");
      })
      .catch((err) => {
        console.log(err);
        errorMsg = err;
      });
  }; // end of searchMovies

  const searchMovies2 = () => {

    console.log("testMC Run the search");
    // default is 'Discover Movies'
    let API_URL =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en";

    // if section is 'Top Rated'
    if (section === "Top Rated") {
      API_URL =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c800844ca750055c720f7e4972535f0b&language=en-US&page=1";
    } else if (section === "Upcoming") {  // if section is 'Upcoming
      API_URL =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=c800844ca750055c720f7e4972535f0b&language=en-US&page=1";
    }

    const OPTIONS = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE",
      },
    };

    fetch(API_URL, OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);

        console.log("movie state", data);
      })
      .catch((e) => {
        console.log("error", e.message);
        errorMsg = e.message;
      });

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.Response === "True") {
    //       setMovies(data.Search);
    //     } else {
    //       setMovies([]);
    //       errorMsg = data.Error;
    //     }
    //     console.log("movies suc");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     errorMsg = err;
    //   });
  }; // end of searchMovies2

  // return the errorMsg, no need for movies as it is state
  return { errorMsg };
};

export default getData;
