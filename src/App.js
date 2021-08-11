import './App.scss';

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import DronInfo from "./components/DronInfo"
import MapData from "./components/MapData"

import { useState } from "react";

import axios from "axios"

function App() {
  
  const [mode, setMode] = useState("A");

  const [data, setData] = useState(['','','','','','','']);

  const getWeather = (regId) => {

    const today = new Date()

    const y = today.getFullYear()
    const year = y.toString()

    const m = today.getMonth() + 1
    let month = m.toString()
    if(month.length === 1){
      month = '0' + month
    }

    const d = today.getDate()
    let day = d.toString()
    if(day.length === 1)
      day = '0' + day

    const h = today.getHours()
    let hour
    if(h < 17)
      hour = '0600'
    else
      hour = '1800'
    
    const time = year + month + day + hour

    const key = 'Oiwk5g9q4GUwo4eToGL%2F9R58JtJAcqjI3uOiibklhV3SYYs%2BjBCzjIl6j6EEgszzeYVNUZNtzmDwff2IdDRHzQ%3D%3D'

    if(regId === undefined)
      regId = '11B00000';

    axios.get(`/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${key}&pageNo=1&numOfRows=10&dataType=JSON&regId=${regId}&tmFc=${time}`).then(response => {
      setData(
        data => [
          data[0] = response.data.response.body.items.item[0].wf3Pm,
          data[1] = response.data.response.body.items.item[0].wf4Pm,
          data[2] = response.data.response.body.items.item[0].wf5Pm,
          data[3] = response.data.response.body.items.item[0].wf6Pm,
          data[4] = response.data.response.body.items.item[0].wf7Pm,
          data[5] = response.data.response.body.items.item[0].wf8,
          data[6] = response.data.response.body.items.item[0].wf9,
        ]
      );
    })
  }

  const setA = () => {
    console.log('A');
    setMode("A");
  }

  const setB = () => {
    console.log('B');
    setMode("B");
    getWeather();
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
            <DronInfo data={data} getWeather={getWeather}/>
          }
        </div>
    </div>
  );
}

export default App;