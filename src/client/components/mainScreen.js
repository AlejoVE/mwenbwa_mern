import React , {useEffect, useState} from 'react'
import Dashboard from './dashboard'
import Topbar from './topbar/topbar'
import Loader from './loader'
import {useGetTreesPos} from '../hooks/hooks'
import {useDispatch, useSelector} from 'react-redux'
import {startLoading} from "../actions/treesActions"
import ViewMap from './map'
import {getTrees} from '../helpers/getTrees'
import { useAsync } from 'react-async';




const loadTrees = async () => 
    await fetch(`${process.env.REACT_APP_API_URL}trees/treesPos`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export const MainScreen = () => {

    const { data, error, isLoading } = useAsync({ promiseFn: loadTrees})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)
    return (
        <>
            <ViewMap data={data}/>
            <Topbar />
            <Dashboard />
        </>
    )
}