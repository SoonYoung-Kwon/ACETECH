import './App.scss';

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import DronInfo from "./components/DronInfo"
import MapData from "./components/MapData"

import { useState } from "react";

import axios from "axios"

function App() {
  
  const [mode, setMode] = useState("A");

  /*const [data, setData] = useState({ // hook open api
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: '',
    day8: '',
    day9: '',
    day10: '',
  });

  const getWeather = (regId) => {
    axios.get(`/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=Oiwk5g9q4GUwo4eToGL%2F9R58JtJAcqjI3uOiibklhV3SYYs%2BjBCzjIl6j6EEgszzeYVNUZNtzmDwff2IdDRHzQ%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&regId=${regId}&tmFc=202108100600`).then(response => {      setData({
        ...data,
        day3: response.data.response.body.items.item[0].wf3Pm,
        day4: response.data.response.body.items.item[0].wf4Pm,
        day5: response.data.response.body.items.item[0].wf5Pm,
        day6: response.data.response.body.items.item[0].wf6Pm,
        day7: response.data.response.body.items.item[0].wf7Pm,
        day8: response.data.response.body.items.item[0].wf8,
        day9: response.data.response.body.items.item[0].wf9,
        day10: response.data.response.body.items.item[0].wf10
      });
    })
  }*/

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
        <button onClick={onClick}>get</button>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        <button onClick={print_log}>log</button>
    </div>
  );
}

export default App;
