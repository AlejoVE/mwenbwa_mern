import React from "react";
import {AppRouter} from './router/appRouter';
import {Provider} from 'react-redux';
import {store} from './store/store';
const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'client', '.env'), debug: true});



export default function App () {

    return (
        <Provider store={store}>
           <AppRouter />
        </Provider>
    )
}