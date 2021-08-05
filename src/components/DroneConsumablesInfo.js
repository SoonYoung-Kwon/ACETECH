import React from "react";
import Hexa from "./../style/images/hexa.png"

export default function DroneConsumablesInfo() {
    return (
        <div className="display_small">
            <div className="title">드론 소모품 정보</div>
            <div className="text_center">
                <table className="consumable_table">
                    <thead>
                        <td className="w-60"></td>
                        <td className="w-100">보유량</td>
                        <td className="w-100">사용중</td>
                        <td className="w-100">수명</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w-60">
                                <img
                                src={Hexa}
                                width='40px'
                                height='35px'
                                alt=''
                                />
                            </td>
                            <td className="w-100">10</td>
                            <td className="w-100">3</td>
                            <td className="w-100">3개월</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                src={Hexa}
                                width='40px'
                                height='35px'
                                alt=''
                                />
                            </td>
                            <td>3</td>
                            <td>2</td>
                            <td>2개월</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                src={Hexa}
                                width='40px'
                                height='35px'
                                alt=''
                                />
                            </td>
                            <td>99</td>
                            <td>99</td>
                            <td>0개월</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}