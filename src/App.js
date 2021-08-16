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

    let y = today.getFullYear()
    y = y.toString()

    let m = today.getMonth() + 1
    m = m.toString()
    if(m.length === 1)
      m = '0' + m

    let d = today.getDate()

    let h = today.getHours()
    if(5 < h && h < 18)
      h = '0600'
    else if(17 < h && h < 24)
      h = '1800'
    else{
      h = '1800'
      d = d - 1
    }

    d = d.toString()
    if(d.length === 1)
      d = '0' + d
    
    const time = y + m + d + h

    if(regId === undefined || regId === "서울" || regId === "인천" || regId === "경기")
      regId = '11B00000'
    else if(regId === "영서")
      regId = '11D10000'
    else if(regId === "영동")
      regId = '11D20000'
    else if(regId === "대전" || regId === "세종" || regId === "충남")
      regId = '11C20000'
    else if(regId === "충북")
      regId = '11C10000'
    else if(regId === "광주" || regId === "전남")
      regId = '11F20000'
    else if(regId === "전북")
      regId = '11F10000'
    else if(regId === "대구" || regId === "경북")
      regId = '11H10000'
    else if(regId === "부산" || regId === "울산" || regId === "경남")
      regId = '11H20000'
    else if(regId === "제주")
      regId = '11G00000'

    const key = 'Oiwk5g9q4GUwo4eToGL%2F9R58JtJAcqjI3uOiibklhV3SYYs%2BjBCzjIl6j6EEgszzeYVNUZNtzmDwff2IdDRHzQ%3D%3D'

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