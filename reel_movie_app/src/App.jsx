import './App.css'

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
 
import Discover from './components/Discover'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import Details from './components/Details'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function App() {
  const theDate = new Date().toDateString();
  console.log(theDate);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discover theDate={theDate} />} />
        <Route path="/topRated" element={<TopRated theDate={theDate} />} />
        <Route path="/upcoming" element={<Upcoming theDate={theDate} />} />
        <Route path="/details" element={<Details theDate={theDate} />} />
      </Routes>
    </Router>

  )
}

export default App
