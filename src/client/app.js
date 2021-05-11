import React, { useState } from "react";
import ViewMap from "./components/map";
import Form from "./components/form/form";
import Dashboard from './components/dashboard'
import {Provider} from 'react-redux';
import {store} from './store/store';
require('dotenv').config()



export default function App () {

    return (
        <Provider store={store}>
            {localStorage.authToken ?
                <>
                <ViewMap />
                <Dashboard />
                
                </>
                :
                <Form />
            }
        </Provider>
    )
}