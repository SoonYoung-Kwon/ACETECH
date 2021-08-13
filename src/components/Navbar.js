import React from "react";
import Hexa from "./../style/images/hexa.png"

export default function Navbar( { mode, modeA, modeB, modeC } ) {

    return (
        <div className="row">
            <div className="navbar-itembar">
                <div className="navbar-item">
                    <img
                        src={Hexa}
                        width='30px'
                        height='25px'
                        alt=''
                    />
                    <div>Map</div>
                </div>
                <div className="navbar-item">
                    <img
                        src={Hexa}
                        width='30px'
                        height='25px'
                        alt=''
                    />
                    <div>Labeling</div>
                </div>
                <div className="navbar-item">
                    <img
                        src={Hexa}
                        width='30px'
                        height='25px'
                        alt=''
                    />
                    <div>Deep<br/>Learning</div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <img
                            src={Hexa}
                            width='30px'
                            height='25px'
                            alt=''
                        />
                        <div>Setting</div>
                    </div>
                    <div className="navbar-item">
                        <img
                            src={Hexa}
                            width='30px'
                            height='25px'
                            alt=''
                        />
                        <div>Home</div>
                    </div>
                </div>
            </div>
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