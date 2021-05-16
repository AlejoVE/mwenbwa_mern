import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import {useSelector} from 'react-redux'
import L from 'leaflet'

//SVG
import tree1 from '../assets/svg/tree-svgrepo-com.svg'
import tree2 from '../assets/svg/olive-svgrepo-com.svg'
import tree3 from '../assets/svg/lemon-tree-svgrepo-com.svg'
import tree4 from '../assets/svg/cypress-svgrepo-com.svg'
import tree5 from '../assets/svg/cherry-tree-svgrepo-com.svg'
import tree6 from '../assets/svg/aspen-svgrepo-com.svg'

const ViewMap = () => {

    const {trees} = useSelector((state) =>state.trees)

    const treeIcon = () => {
        const treesSVG = [tree1,tree2,tree3,tree4,tree5,tree6]
        const svg = treesSVG[Math.floor(Math.random()*treesSVG.length)];
        const leafletIcon = L.icon({
            iconUrl: svg,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
        });
        return leafletIcon;
    };

    
    return (
        <>
            <MapContainer center={[50.628709, 5.575633]} zoom={10}>

                <TileLayer 
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} 
                attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                />
                    <MarkerClusterGroup option={markerIcon()}>
                        {trees.map(tree => (
                            <Marker position={tree.loc} key={tree.id} icon={treeIcon()}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>

            </MapContainer>
        </>
    );
}

export default ViewMap;