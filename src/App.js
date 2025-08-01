import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Contact from "./components/Contact"
import About from "./components/About"
import {
  Routes,
  Route
} from "react-router-dom";
import Downbar from './components/Downbar';
import { Page } from './components/StyledComponents'

function App() {
  return ( 
    <Page className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Downbar/>
    </Page>
  );
}

export default App;