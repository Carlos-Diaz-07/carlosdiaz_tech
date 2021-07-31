import logo from './img/Logo.svg';
import './css/App.css';
import "./components/NavBar"
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Carlos Diaz portfolio coming soon
        </p>
        
      </header>
    </div>
  );
}

export default App;
