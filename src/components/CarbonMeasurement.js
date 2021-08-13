import React from "react";
import NumPack from "./NumPack"

export default function CarbonMeasurement() {
    return (
        <div className="display_small">
            <div className="title">탄소 측정량</div>
            <div className="text_center">
                <table className="carbon_table">
                    <thead>
                        <td className="w-25"></td>
                        <td className="w-110">지역명</td>
                        <td className="w-80">측정량</td>
                        <td className="w-140">비교량<br/>(전 측정 대비)</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-25">
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td className="w-110">지역이름</td>
                            <td className="w-80">4000</td>
                            <td className="w-140">+ 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.two}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>4000</td>
                            <td>+ 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.three}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>4000</td>
                            <td>+ 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.four}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>4000</td>
                            <td>+ 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.five}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>4000</td>
                            <td>+ 5%</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.six}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>지역이름</td>
                            <td>4000</td>
                            <td>+ 5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}