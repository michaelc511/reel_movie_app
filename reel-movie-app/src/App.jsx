import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useFetch from './tools/useFetch'
import NavigationBar from './components/home/NavigationBar'
import Home from './components/home/home';
import Discover from './components/discovery/Discover';
import movieBackground from './assets/movieBackground.png'


function App() {
  const { data } = useFetch()

  return (
    <div className='appContainer'>
      <div className="app">
        <BrowserRouter>      
        
          <NavigationBar/>

          <Routes>
            <Route path='/' element={<Home data={data} /> } />
            <Route path='/discover' element={<Discover data={data} /> } />
            {/* <Route path='/upComing' element={<CommingSoon data={data} /> } /> */}
            {/* <Route path='/topRated' element={<TopRated data={data} /> } /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
