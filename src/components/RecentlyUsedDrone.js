import React from "react";
import Drone from "./../style/images/drone.png";

export default function RecentlyUsedDrone() {
    return (
        <div className="display_large">
            <div className="title">최근 사용한 드론</div>
            <div className="text_center">
                <img
                    src={Drone}
                    width='400px'
                    height='350px'
                    alt=''
                />
                <div className="title">Phantom Pro V2.0</div>
                <div className="text_center">
                    <table className="drone_table">
                        <thead>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td className="head">주파수</td>
                                <td className="body">2.4GHz</td>
                                <td className="head">용량</td>
                                <td className="body">5870mAh</td>
                            </tr>
                            <tr>
                                <td className="head">작동시간</td>
                                <td className="body">30분</td>
                                <td className="head">시속</td>
                                <td className="body">72km/h</td>
                            </tr>
                            <tr>
                                <td className="head">동영상</td>
                                <td className="body">4k@/60fps</td>
                                <td className="head">사진</td>
                                <td className="body">20MP</td>
                            </tr>
                            <tr>
                                <td className="head">조종기간</td>
                                <td className="body">7km</td>
                                <td className="head">중량</td>
                                <td className="body">1.37kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}