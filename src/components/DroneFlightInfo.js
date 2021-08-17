import React from "react";

import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";
import { compose, withProps } from "recompose"

export default function DroneFlightInfo() {

    let ref

    const key = "AIzaSyCJwj9LqxdDIwG0GCcHZrht9jUCBdqyrco"

    const DroneFlightMap = compose(
        withProps({
          googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}`,
          loadingElement: <div style={{ height: `100px` }} />,
          containerElement: <div style={{ width: `576px`, height: `576px`, marginTop: `27px` }} />,
          mapElement: <div style={{ height: `100%`, borderRadius: `15px` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )(props =>
        <GoogleMap
          ref={(mapRef) => ref = mapRef}
          defaultZoom={8}
          defaultCenter={{ lat: 37.2622222, lng: 127.0288899 }}
          options={{
                disableDefaultUI: true
          }}
          onCenterChanged={() => {
            let result = JSON.parse(JSON.stringify(ref.getCenter()))
            document.getElementById("lat").innerHTML = result.lat.toFixed(7)
            document.getElementById("lng").innerHTML = result.lng.toFixed(7)
          }}
        >
            <KmlLayer
                url="https://www.google.com/maps/d/u/0/kml?mid=1bya2qrB8ljMyMMWzPeg07jzUxfc&nl=1&forcekml=1"
                options={{ preserveViewport: true }}
            />
        </GoogleMap>
      )

    return (
        <div className="display_large">
            <div className="title">드론 비행가능 구역정보</div>
            <DroneFlightMap/>
            <div className="place_position">
              <div>N : <span id="lat">37.2000000</span></div>
              <div>E : <span id="lng">127.4000000</span></div>
            </div>
        </div>
    )
}