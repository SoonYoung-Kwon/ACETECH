import React from "react";
//import View from "./../style/images/view.jpg";

export default function RecentlyMap() {
    return (
        <div className="display_large">
            <div className="title">최근 본 지도</div>
            <div className="map">
            </div>
            {/*<img 
                src={View}
                width='550px'   // Map Data
                height='550px'
                alt=''
            />*/}
            <div className="place_label">경기도 구리시 교문 1동 아차산</div>
        </div>
    )
}