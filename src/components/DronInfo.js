import React from "react";
import "./../style/scss/DronInfo.scss"
import RecentlyUsedDrone from "./RecentlyUsedDrone"
import DroneFlightInfo from "./DroneFlightInfo"
import DroneConsumablesInfo from "./DroneConsumablesInfo"
import ShootingSchedule from "./ShootingSchedule"
import Weather from "./Weather"

export default function DronInfo() {
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
                <Weather/>
            </div>
        </div>
    )
}