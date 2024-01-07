import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './tools/useFetch'
import NavigationBar from './components/NavigationBar'
import HomeCarousel from './components/HomeCarousel'

function App() {
  const { data, error } = useFetch()

  return (
    <>

      <NavigationBar/>

      {/* here I will make a carousel for the first 5 movies using bootstrap */}
      <HomeCarousel data={data}/>

    </>
  )
}

export default App
