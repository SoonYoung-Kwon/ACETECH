import './App.scss';

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import DronInfo from "./components/DronInfo"
import MapData from "./components/MapData"

import { useState } from "react";

import axios from "axios"

function App() {
  
  const [mode, setMode] = useState("A");

  const [data, setData] = useState(null);

  const onClick = () => {
    axios.get('http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=Oiwk5g9q4GUwo4eToGL%2F9R58JtJAcqjI3uOiibklhV3SYYs%2BjBCzjIl6j6EEgszzeYVNUZNtzmDwff2IdDRHzQ%3D%3D&pageNo=1&numOfRows=10&dataType=XML&regId=11B00000&tmFc=202108090600').then(reponse => {
      setData(reponse.data);
    })
  }

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
        <button onClick={onClick}>asdf</button>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
}

export default App;
