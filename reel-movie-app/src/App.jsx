import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useFetch from './tools/useFetch'
import NavigationBar from './components/home/NavigationBar'
import Home from './components/home/home';
import Discover from './components/discovery/Discover';


function App() {
  const { data } = useFetch()

  return (
    <div className='app'>
      
      <BrowserRouter>      
      
      <NavigationBar/>

        <Routes>
          <Route path='/' element={<Home data={data} /> } />
          <Route path='/discover' element={<Discover data={data} /> } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
