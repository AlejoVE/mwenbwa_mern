import React, { useState } from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from 'leaflet'
import Card from './card'
import {useFetchTree} from '../hooks/hooks'
import {store} from '../store/store'



//SVG
import tree1 from '../assets/svg/tree-svgrepo-com.svg'
import tree2 from '../assets/svg/olive-svgrepo-com.svg'
import tree3 from '../assets/svg/lemon-tree-svgrepo-com.svg'
import tree4 from '../assets/svg/cypress-svgrepo-com.svg'
import tree5 from '../assets/svg/cherry-tree-svgrepo-com.svg'
import tree6 from '../assets/svg/aspen-svgrepo-com.svg'
import lockSvg from '../assets/svg/lock-svgrepo-com.svg'

const ViewMap = (data) => {


    const uid = store.getState().auth.uid
    const userColor = store.getState().auth.color
    const root = document.querySelector(':root');

    
    switch (userColor) {
        case "blue":
            root.style.setProperty('--color-theme', "#00aaff93");
            root.style.setProperty('--color-theme-hover', "#00aaffec");
            root.style.setProperty('--color-theme-marker', "radial-gradient(#00aaff83, #00aaff3b)");
            break;
        case "green":
            root.style.setProperty('--color-theme', "#1aad57bd");
            root.style.setProperty('--color-theme-hover', "#18e06bb6");
            root.style.setProperty('--color-theme-marker', "radial-gradient(#1aad57bd, #1aad5741)");
            break;
        case "purple":
            root.style.setProperty('--color-theme', "#a29bfe93");
            root.style.setProperty('--color-theme-hover', "#a29bfec2");
            root.style.setProperty('--color-theme-marker', "radial-gradient(#a29bfee1, #a29bfe77)");
            break;    
        case "turquoise":
            root.style.setProperty('--color-theme', "#1abc9ca4");
            root.style.setProperty('--color-theme-hover', "#1abc9ce8");
            root.style.setProperty('--color-theme-marker', "radial-gradient(#1abc9cc0, #1abc9c44)");
            break;    
        default:
            break;
    }
    

    const getOneTree = useFetchTree()

    const handleClick = (id) => {
        getOneTree(id, uid)
    }

    const treeIcon = (isLocked) => {
        const treesSVG = [tree1,tree2,tree3,tree4,tree5,tree6]
        let svg = treesSVG[Math.floor(Math.random()*treesSVG.length)];
        if(isLocked)
            svg = lockSvg
        
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
            <MapContainer center={[50.62243069591208, 5.587268755810446]} zoom={18} minZoom={12}>

                <TileLayer 
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} 
                attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                />
                    <MarkerClusterGroup spiderfyOnMaxZoom={false} disableClusteringAtZoom={18}>
                        {
                            data.data.trees.map(tree => (
                                <Marker 
                                position={tree.loc} 
                                key={tree.id} 
                                id={tree.id} 
                                icon={treeIcon(tree.locked)} 
                                eventHandlers={{
                                    click: (e) => {
                                        handleClick(e.target.options.id)
                                        },
                                    }}
                                >
                                    <Popup>
                                        <Card/>
                                    </Popup>
                                </Marker>
                            ))
                        }
                    </MarkerClusterGroup>

            </MapContainer>
        </>
    );
}

export default ViewMap;