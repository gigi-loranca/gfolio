import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Contact from "./components/Contact"
import About from "./components/About"

import {
  // createBrowserRouter,
  // RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import Downbar from './components/Downbar';


function App() {
  return ( 
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Downbar/>
    </div>
  );
}

export default App;