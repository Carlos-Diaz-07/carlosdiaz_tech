import logo from './img/Logo.svg';
import './css/App.css';
import "./components/NavBar"
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection'
import AboutMeSection from './components/AboutMeSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutMeSection />
    </div>
  );
}

export default App;
