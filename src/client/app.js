import React from "react";
import {AppRouter} from './router/appRouter';
import {Provider} from 'react-redux';
import {store} from './store/store';



export default function App () {

    return (
        <Provider store={store}>
           <AppRouter />
        </Provider>
    )
}