import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import getImageUrl from "../../tools/getImageUrl";
import { Link } from "react-router-dom";

import './Discover.css'


export default function Discover({ data }) {

  console.log(data);
  return(
    <div>

      <div className="page-header">
        <h2 >Discover</h2>
      </div>

      <Container className="d-flex flex-wrap justify-content-around align-items-center ">
        {data ? data.results.map(movie => {
          return (
            <Card key={movie.id} className="movie-card m-4">
              {/* cardImage */}
              <Card.Img 
              src={getImageUrl(movie.poster_path)}
              className="movie-image-card"
              />

              <Link to={`/details/${movie.id}`}>
              <button>Details and review</button>
              </Link>


            </Card>
          )
          //if no movies show loading
        }): 'Loading'}
      </Container>
    </div>
  )

}