import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet'


const ViewMap = () => {
    return (
        
        <MapContainer center = {[50.628709, 5.575633]} zoom = {7}>
            <TileLayer 
                url="https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    )
}

export default ViewMap;