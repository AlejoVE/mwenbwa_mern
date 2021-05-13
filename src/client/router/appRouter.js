import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Redirect, HashRouter } from 'react-router-dom';
import { PublicRoutes } from './publicRoute';
import { PrivateRoutes } from './privateRoute';
import {Form} from '../components/form/form';
import {MainScreen} from '../components/mainScreen';
import {useSelector } from 'react-redux';
import {startChecking} from '../actions/authActions';
import {useDispatch} from 'react-redux';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const uid = useSelector((state) => state.auth.uid);

    useEffect(() => {
        dispatch(startChecking())
    },[])

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