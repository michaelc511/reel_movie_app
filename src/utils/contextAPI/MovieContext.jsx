import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // state variables 
  const [searchTerm, setSearchTerm] = useState("2024");
  const [section, setSection] = useState("Discover");
  const [movies, setMovies] = useState(null);
  const [runSearch, setRunSearch] = useState(true);
  const [ source, setSource ] = useState("moviedb");

  // functions to update the state variables
  // const setSearchTermHandler = (term) => {
  //   setSearchTerm(term);
  // };

  // const setSectionHandler = (section) => {
  //   setSection(section);
  // };

  // const setMoviesHandler = (movies) => {
  //   setMovies(movies);
  // };

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        section,
        movies,
        runSearch,
        source,
        setSearchTerm,
        setSection,
        setMovies,
        setRunSearch,
        setSource
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
