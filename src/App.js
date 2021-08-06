import './App.scss';

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import DronInfo from "./components/DronInfo"
import MapData from "./components/MapData"

import { useState } from "react";

function App() {
  
  const [mode, setMode] = useState("A");

  const setA = () => {
    console.log('A');
    setMode("A");
  }

  const setB = () => {
    console.log('B');
    setMode("B");
  }

  const setC = () => {
    console.log('C');
    setMode("C");
  }

  return (
    <div>
        <Header/>
        <div className="row">
          <Navbar mode={mode} modeA={setA} modeB={setB} modeC={setC}/>
          {mode === "A" &&
            <MapData/>
          }
          {mode === "B" &&
            <DronInfo/>
          }
        </div>
    </div>
  );
}

export default App;
