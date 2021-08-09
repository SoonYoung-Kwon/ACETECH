import React from "react";
import Cloud from "./../style/images/001-cloudy day.png"

export default function Weather() {
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
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                        <td className="w-80">
                            <img
                                src={Cloud}
                                width='60px'
                                height='60px'
                                alt=''
                            />
                        </td>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>SUN</span></td>
                            <td><span>MON</span></td>
                            <td><span>TUE</span></td>
                            <td><span>WED</span></td>
                            <td><span>THU</span></td>
                            <td><span>FRI</span></td>
                            <td><span>SAT</span></td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    )
}