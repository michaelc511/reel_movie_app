
import './TopRatedScroller.css'
import getImageUrl from '../tools/getImageUrl'
export default function TopRatedScroller({ data }){

  return(
    <>
      {/* the text top rated will direct to the topRated Page */}
      {/* the router */}
      <h2>TopRated <img src="./src/assets/arrow-up-right.svg" alt="Icon" className='icon' /></h2>


      {/* the scroller */}
      <div className="mediaScroller">
        {data ? data.results.map(movie => {
          return (
            <div className='mediaElement'>
              <img src={getImageUrl(movie.poster_path)} alt="Horizontal Img" className='sideScrollerImages'/>
            </div>
          )
        }): 'Loading'}
      </div>
    </>
  )
}