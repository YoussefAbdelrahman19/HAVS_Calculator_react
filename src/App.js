import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import HavsCalculator from './Components/Havs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HavsCalculator />
    </div>
  );
}

export default App;
