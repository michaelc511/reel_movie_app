import { useEffect, useState } from "react";
export default function useFetch(){
  const [data, setData] = useState(null)


  const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en";
  const options = {
      method: "GET",
      headers: {
      accept: "application/json",
      Authorization:
        import.meta.env.VITE_TOKEN
    }
  }

  useEffect(() => {
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => setData(json));
  }, [])
  return {data}
} 