import React from "react";

import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";
import { compose, withProps } from "recompose"

export default function DroneFlightInfo() {

    const DroneFlightMap = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJwj9LqxdDIwG0GCcHZrht9jUCBdqyrco",
          loadingElement: <div style={{ height: `100px` }} />,
          containerElement: <div style={{ width: `300px`, height: `300px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 38, lng: 128 }}
          options={{
                disableDefaultUI: true
          }}
        >
            <KmlLayer
                url="https://www.google.com/maps/d/u/0/kml?mid=1bya2qrB8ljMyMMWzPeg07jzUxfc&nl=1&forcekml=1"
                options={{ preserveViewport: true }}
            />
        </GoogleMap>
      )

    return (
        <div className="display_small">
            <div className="title">드론 비행가능 구역정보</div>
            <DroneFlightMap/>
        </div>
    )
}