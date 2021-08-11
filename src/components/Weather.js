import React from "react";
import Cloud from "./../style/images/001-cloudy day.png"
import Rain from "./../style/images/009-rainy.png"

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
                            if(data === "흐림"){
                                return(
                                    <td className="w-80">
                                        <img
                                            src={Cloud}
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
                                            src={Rain}
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
                            <td><span>3일 후</span></td>
                            <td><span>4일 후</span></td>
                            <td><span>5일 후</span></td>
                            <td><span>6일 후</span></td>
                            <td><span>7일 후</span></td>
                            <td><span>8일 후</span></td>
                            <td><span>9일 후</span></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    )
}