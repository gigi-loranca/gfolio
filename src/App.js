import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Contact from "./components/Contact"
import About from "./components/About"
import Background from './components/Background';
import Music from "./components/Music"
import Landing from './components/Landing';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Footer from './components/Footer';
import { Page } from './components/StyledComponents'

function App() {
  const location = useLocation();

  return ( 
    <Page>
        <Background />
        {location.pathname !== "/" && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/music" element={<Music/>} />
        </Routes>
        {location.pathname !== "/" && <Footer/>}
    </Page>
  );
}

export default App;