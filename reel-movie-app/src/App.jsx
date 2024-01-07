import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './tools/useFetch'
import NavigationBar from './components/NavigationBar'
import HomeCarousel from './components/HomeCarousel'

function App() {
  const { data, error } = useFetch()

  console.log(data);
  return (
    <>

      <NavigationBar/>

      {/* here I will make a carousel for the first 5 movies using bootstrap */}
      <HomeCarousel data={data}/>

    </>
  )
}

export default App
