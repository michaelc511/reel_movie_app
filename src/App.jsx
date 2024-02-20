import Main from "./components/Main";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
  <Routes>
    <Route
      path="/"
      element={<Main theSection="Discover" />}
    />
    <Route
      path="/discover"
      element={<Main theSection="Discover" />}
    />
    <Route
      path="/upcoming"
      element={<Main theSection="Upcoming" />}
    />
    <Route
      path="/top-rated"
      element={<Main theSection="Top Rated" />}
    />
  </Routes>
  )
};

export default App;
