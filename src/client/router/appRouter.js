import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { PublicRoutes } from './publicRoute';
import { PrivateRoutes } from './privateRoute';
import {Form} from '../components/form/form';
import {MainScreen} from '../components/mainScreen';
import {useSelector } from 'react-redux';
import {startChecking} from '../actions/authActions';
import {useDispatch} from 'react-redux';
import Loader from '../components/loader'
import { store } from '../store/store'


export const AppRouter = () => {

    const dispatch = useDispatch()
    const uid = useSelector((state) => state.auth.uid)
    const isChecking = useSelector((state) => state.auth.isChecking)

    useEffect(() => {
        dispatch(startChecking())
    },[])

    if(isChecking){
        return <Loader />
    }

    return (
        <Router>
            <Switch>
                <PublicRoutes
                    exact
                    path='/'
                    isAuthenticated={Boolean(uid)}
                    component={Form}
                />
                <PrivateRoutes
                    exact
                    path='/map'
                    isAuthenticated={Boolean(uid)}
                    component={MainScreen}
                />
                <Redirect to='/' />
            </Switch>
        </Router>
    );
};