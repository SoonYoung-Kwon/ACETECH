import React, { useState } from "react";
import WeatherPack from "./WeatherPack"

function Weather( { data, getWeather } ) {

    const [regId, setRegId] = useState("서울");
    
    const [coord, setCoord] = useState(['37° 34′ 00″ N', '126° 58′ 41″ E']);

    const onchanged = (e) => {
        let value = e.target.value
        value = value.split("/")
        setRegId(value[0])
        setCoord(
            coord => [
                coord[0] = value[1],
                coord[1] = value[2]
            ]
        )
        getWeather(regId)
    }

    return (
        <div className="display_small">
            <div className="title">
                <span>날씨</span>
                <span className="place_input">
                    <select id="selecter" onChange={onchanged}>
                        <option value="서울/37° 34′ 00″ N/126° 58′ 41″ E">서울</option>
                        <option value="인천/37° 27′ 22″ N/126° 42′ 19″ E">인천</option>
                        <option value="경기/37° 35′ 11″ N/127° 02′ 46″ E">경기</option>
                        <option value="영서/37° 49′ 49″ N/128° 13′ 33″ E">영서</option>
                        <option value="영동/37° 49′ 49″ N/128° 13′ 33″ E">영동</option>
                        <option value="대전/36° 21′ 03″ N/127° 23′ 06″ E">대전</option>
                        <option value="세종/36° 30′ 00″ N/127° 16′ 00″ E">세종</option>
                        <option value="충남/36° 39′ 31″ N/126° 40′ 22″ E">충남</option>
                        <option value="충북/36° 38′ 08″ N/127° 29′ 29″ E">충북</option>
                        <option value="대구/35° 52′ 17″ N/128° 36′ 05″ E">대구</option>
                        <option value="경북/35° 53′ 33″ N/128° 36′ 00″ E">경북</option>
                        <option value="부산/35° 08′ 16″ N/129° 03′ 20″ E">부산</option>
                        <option value="울산/35° 31′ 31″ N/129° 13′ 20″ E">울산</option>
                        <option value="경남/35° 15′ 00″ N/128° 15′ 00″ E">경남</option>
                        <option value="광주/35° 06′ 00″ N/126° 48′ 00″ E">광주</option>
                        <option value="전남/34° 49′ 00″ N/126° 27′ 52″ E">전남</option>
                        <option value="전북/35° 49′ 13″ N/127° 06′ 31″ E">전북</option>
                        <option value="제주/33° 34′ 00″ N/126° 10′ 00″ E">제주</option>
                    </select>
                </span>
            </div>
            <div className="text_center">
                <table className="location_table">
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td className="head">장소</td>
                            <td className="body">{regId}</td>
                        </tr>
                        <tr>
                            <td className="head">좌표</td>
                            <td className="body"><span>{coord[0]}</span><br/><span>{coord[1]}</span></td>
                        </tr>
                    </tbody>
                </table>
                <table className="weather_table">
                    <thead>
                        {data.map((data, i) => {
                            if(data === "맑음"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.Sunny}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                            else if(data === "흐림"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.DarkCloudy}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                            else if(data === "구름많음"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.Cloudy}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                            else if(data === "구름많고 비" || data === "구름많고 소나기" || data === "흐리고 비" || data === "흐리고 소나기"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.Rainy}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                            else if(data === "구름많고 눈" || data === "흐리고 눈"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.Snowy}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                            else if(data === "구름많고 비/눈" || data === "흐리고 비/눈"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.Fall}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                            else{
                                return(
                                    <td className="w-80">
                                        <img
                                            src={WeatherPack.Cloudy}
                                            width='60px'
                                            height='60px'
                                            alt=''
                                        />
                                    </td>
                                )
                            }
                        })}
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="day">3일 후</span></td>
                            <td><span className="day">4일 후</span></td>
                            <td><span className="day">5일 후</span></td>
                            <td><span className="day">6일 후</span></td>
                            <td><span className="day">7일 후</span></td>
                            <td><span className="day">8일 후</span></td>
                            <td><span className="day">9일 후</span></td>
                        </tr>
                        <tr>
                            <td><span className="weather_str">{data[0]}</span></td>
                            <td><span className="weather_str">{data[1]}</span></td>
                            <td><span className="weather_str">{data[2]}</span></td>
                            <td><span className="weather_str">{data[3]}</span></td>
                            <td><span className="weather_str">{data[4]}</span></td>
                            <td><span className="weather_str">{data[5]}</span></td>
                            <td><span className="weather_str">{data[6]}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    )
}

export default React.memo(Weather)