import React from "react";
import WeatherPack from "./WeatherPack"

export default function Weather( { data, getWeather } ) {
    return (
        <div className="display_small">
            <div className="title">
                <span>날씨</span>
                <span className="place_input">
                    <input type="text"/>
                    <button>입력</button>
                </span>
            </div>
            <div className="text_center">
                <table className="location_table">
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td className="head">장소</td>
                            <td className="body">충청남도 / 천안시</td>
                        </tr>
                        <tr>
                            <td className="head">좌표</td>
                            <td className="body"><span>36.7966306</span><br/><span>126.9349275</span></td>
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