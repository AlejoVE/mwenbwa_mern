import React , {useEffect} from 'react'
import Dashboard from './dashboard'
import Topbar from './topbar/topbar'
import Loader from './loader'
import {useGetTreesPos} from '../hooks/hooks'
import {useDispatch, useSelector} from 'react-redux'
import {startLoading} from "../actions/treesActions"
import ViewMap from './map'


export const MainScreen = () => {

    const dispatch = useDispatch()
    const getTrees = useGetTreesPos()
    const {isLoading} = useSelector((state) => state.trees)


    useEffect(() => {
        dispatch(startLoading())
        getTrees()
    },[])

    if(isLoading){
        return (<Loader />)
    }

    return (
        <>
            <ViewMap />
            <Topbar />
            <Dashboard />
        </>
    )
}