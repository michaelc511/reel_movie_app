import Carousel from 'react-bootstrap/Carousel';
import './/HomeCarousel.css'
export default function HomeCarousel({ data }){

  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };

  return(
    <div className="carouselContainer">
      <Carousel className="custom-carousel">

        {/* here I actually only want 3 items and using slice can just get what I want */}
        {data ? data.results.slice(0,3).map((movie) => {

          return(
            <Carousel.Item key={movie.id}>
              <img className="carouselImg" 
                // text={movie.id}
                src={getImageUrl(movie.poster_path)}
                 />
              <Carousel.Caption>
                <h2>{movie.original_title}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          )

        }) : 'Loading'}
      </Carousel>
    </div>
  )
}