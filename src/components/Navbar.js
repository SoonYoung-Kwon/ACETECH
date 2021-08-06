import React from "react";

export default function Navbar( { mode, modeA, modeB, modeC } ) {

    return (
        <div className="row">
            <div className="navbar-iconbar"></div>
            <div className="navbar-menubar">
                <div className={"navbar-menu " + ( mode === "A" ? 'active' : '' )} onClick={modeA}>
                    지도 및 데이터
                </div>
                <div className={"navbar-menu " + ( mode === "B" ? 'active' : '' )} onClick={modeB}>
                    드론 정보
                </div>
                <div className={"navbar-menu " + ( mode === "C" ? 'active' : '' )} onClick={modeC}>
                    사용자 정보
                </div>
            </div>
        </div>
    )
}