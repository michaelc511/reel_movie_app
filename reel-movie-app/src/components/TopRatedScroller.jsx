
import './TopRatedScroller.css'
import getImageUrl from '../tools/getImageUrl'
export default function TopRatedScroller({ data }){

  return(
    <>
      {/* the text top rated will direct to the topRated Page */}
      <h2>TopRated</h2>
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