import './Discover.css'


export default function Discover({ data }) {

  console.log(data);
  return(
    <>
      <h2>Discover</h2>

      <div className="">
        {data ? data.results.map(movie => {
          return (
            <div>
              {movie.title}
            </div>
          )
        }): 'Loading'}
      </div>
    </>
  )

}