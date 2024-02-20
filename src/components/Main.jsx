import React from "react"; 
import MoviePage from "./MoviePage";
// import the MovieProvider from the MovieContext
import { MovieProvider } from "../utils/contextAPI/MovieContext";

// Rest of the code...

export default function Main({theSection}) {
  let source = "moviedb"; // moviedb or omdbapi
   
  return (
    <div>
      {/* Wrap the Home component with the MovieProvider */}
      <MovieProvider>
        <MoviePage theSection={theSection} />
      </MovieProvider>
    </div>
  );
}
