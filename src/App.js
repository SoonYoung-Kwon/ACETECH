import './App.scss';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import DronInfo from "./components/DronInfo"
import MapData from "./components/MapData"

function App() {
  return (
    <div>
        <Header/>
        <div className="row">
          <Navbar/>
          <MapData/>
        </div>
        <Header/>
        <div className="row">
          <Navbar/>
          <DronInfo/>
        </div>
    </div>
  );
}

export default App;
