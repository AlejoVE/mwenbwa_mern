import React, { useState } from "react";
import ViewMap from "./components/map";
import Form from "./components/form/form";

// import { useMapElement } from "react-leaflet/types/MapContainer";

export default function App () {

    return (
        <div>
            <ViewMap />
            <Form />
        </div>
    )
}