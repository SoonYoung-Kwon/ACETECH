import React from "react";
import NumPack from "./NumPack"

export default function DroneFlightInfo() {
    return (
        <div className="display_small">
            <div className="title">드론 비행가능 구역정보</div>
            <div className="text_center">
                <table className="flight_table">
                    <thead>
                        <td className="w-25"></td>
                        <td className="w-110">지역명</td>
                        <td className="w-80">가능여부</td>
                        <td className="w-140">기타사항</td>
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
                            <td className="w-110">서울/송파</td>
                            <td className="w-80">O</td>
                            <td className="w-140">야간 비행 가능</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>부산/해운대</td>
                            <td>O</td>
                            <td>사전 협의 필요</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>대구</td>
                            <td>O</td>
                            <td>ETC</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>대구</td>
                            <td>O</td>
                            <td>ETC</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>대구</td>
                            <td>O</td>
                            <td>ETC</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>대구</td>
                            <td>O</td>
                            <td>ETC</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={NumPack.one}
                                    width='25px'
                                    height='25px'
                                    alt=''
                                />
                            </td>
                            <td>대구</td>
                            <td>O</td>
                            <td>ETC</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}