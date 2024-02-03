import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './tools/useFetch'
import NavigationBar from './components/home/NavigationBar'
import Home from './components/home/home';


function App() {
  const { data } = useFetch()

  return (
    <div className='app'>
      
      <NavigationBar/>

      <Home data={data} />


    </div>
  )
}

export default App
