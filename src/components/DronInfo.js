import React from "react";
import "./../style/scss/DronInfo.scss"
import RecentlyUsedDrone from "./RecentlyUsedDrone"
import DroneFlightInfo from "./DroneFlightInfo"
import DroneConsumablesInfo from "./DroneConsumablesInfo"
import ShootingSchedule from "./ShootingSchedule"
import Weather from "./Weather"

export default function DronInfo( { data, getWeather } ) {
    return (
        <div className="row">
            <div>
                <RecentlyUsedDrone/>
            </div>
            <div>
                <DroneFlightInfo/>
                <DroneConsumablesInfo/>
            </div>
            <div>
                <ShootingSchedule/>
                <Weather data={data} getWeather={getWeather}/>
            </div>
        </div>
    )
}