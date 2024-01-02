import useFetch from "../hooks/useFetch";

const Discover = ({ theDate }) => {
 

  // 1. Set up the url and the GET options
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
 
  const { data: movies , isPending, error } = useFetch(url, options);

  return (
    <div>
      Discover - {theDate}

      {/* Map movies */}
      {movies ? ( 
        movies.results.map((movie) => (
          <div key={movie.id} >
            {movie.original_title}
          </div>
        ))
      )
        // else show 'loading'
        : ("loading")}
    </div>
  );
}

export default Discover;