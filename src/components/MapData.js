import React from "react";
import "./../style/scss/MapData.scss"
import RecentlyMap from "./RecentlyMap"
import RecentlyLabelsPath from "./RecentlyLabelsPath"
import BiomassProduction from "./BiomassProduction"
import DeepLearningStatus from "./DeepLearningStatus"
import CarbonMeasurement from "./CarbonMeasurement"

export default function MapData() {
    return (
        <div className="row">
            <div>
                <RecentlyMap/>
            </div>
            <div>
                <RecentlyLabelsPath/>
                <BiomassProduction/>
            </div>
            <div>
                <DeepLearningStatus/>
                <CarbonMeasurement/>
            </div>
        </div>
    )
}