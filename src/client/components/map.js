import React from "react";
import {Map, TileLayer} from "react-leaflet";

const ViewMap = () => {
    
    // const map = L.map('map').setView([50.628709, 5.575633], 7); 
    // const marker = L.marker([50.628709, 5.575633]).addTo(map);

    return (
        
        <Map center = {[50.628709, 5.575633]} zoom = {7}>
            <TileLayer 
                    url="https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
        </Map>

    )
}

export default ViewMap;