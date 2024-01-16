import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './tools/useFetch'
import NavigationBar from './components/NavigationBar'
import HomeCarousel from './components/HomeCarousel'
import TopRatedScroller from './components/TopRatedScroller';

function App() {
  const { data } = useFetch()

  return (
    <div className='app'>

      <NavigationBar/>

      {/* here I will make a carousel for the first 5 movies using bootstrap */}
      <HomeCarousel data={data} />
      <TopRatedScroller data={data} />
      <TopRatedScroller data={data} />
      <TopRatedScroller data={data} />



    </div>
  )
}

export default App
