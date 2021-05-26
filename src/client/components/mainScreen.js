import React  from 'react'
import Dashboard from './dashboard'
import Topbar from './topbar/topbar'
import ViewMap from './map'




export const MainScreen = () => {

    return (
        <>
        <ViewMap />
        <Topbar />
        <Dashboard />
        </>
    )
}