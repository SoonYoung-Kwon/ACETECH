import React from "react";
import NumPack from "./NumPack"

import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";
import { compose, withProps } from "recompose"

export default function DroneFlightInfo() {
    
    const MyMap = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJwj9LqxdDIwG0GCcHZrht9jUCBdqyrco&v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100px` }} />,
          containerElement: <div style={{ width: `300px`, height: `300px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )(props =>
        <GoogleMap
          defaultZoom={30}
          defaultCenter={{ lat: 38, lng: 128 }}
          defaultStreetView={false}
        >
            <KmlLayer
                url="https://www.google.com/maps/d/u/0/kml?mid=1bya2qrB8ljMyMMWzPeg07jzUxfc&nl=1&forcekml=1"
                options={{ preserveViewport: false }}
            />
        </GoogleMap>
      )

    return (
        <div className="display_small">
            <div className="title">드론 비행가능 구역정보</div>
            <MyMap/>
            {/*<div className="text_center">
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
            </div>*/}
        </div>
    )
}