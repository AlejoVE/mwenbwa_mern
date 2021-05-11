import React, { useState } from "react";
import ViewMap from "./components/map";
import Form from "./components/form/form";
import {Provider} from 'react-redux';
import {store} from './store/store';
require('dotenv').config()



export default function App () {

    return (
        <Provider store={store}>
                {/* <ViewMap /> */}
                <Form />
        </Provider>
    )
}