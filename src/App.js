// import './css/App.css';
import "./components/NavBar"
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection'
import AboutMeSection from './components/AboutMeSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
