import React, { useState } from "react";
import ViewMap from "./components/map";
import Form from "./components/form/form";
import {Provider} from 'react-redux';
import {store} from './store/store';
// import { useMapElement } from "react-leaflet/types/MapContainer";
require('dotenv').config()



export default function App () {

    return (
        <Provider store={store}>
            <div>
                <ViewMap />
                <Form />
            </div>
        </Provider>
    )
}