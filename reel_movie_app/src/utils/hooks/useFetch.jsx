import { useEffect, useState } from 'react';

const useFetch = (url, options) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // uncomment out the setTimeout and the closing to test the loading message 
    //setTimeout(() => {
      fetch(url, options)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setIsPending(false);
          console.log('data', data);
          setData(data)
        })
        .catch((e) => {
          setIsPending(false);
          setError(e.message);
          console.log('error',)
        }); 
   //}, 1000);
  }, [url]);

return { data, isPending, error }
}


export default useFetch;