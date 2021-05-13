import React from 'react'
import ViewMap from './map'
import Dashboard from './dashboard'
import Topbar from './topbar/topbar'
import Logout from './logout'

export const MainScreen = () => {

    return (
        <>
            <ViewMap />
            <Topbar />
            <Dashboard />
        </>
    )
}