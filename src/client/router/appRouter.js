import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PublicRoutes } from './publicRoute';
import { PrivateRoutes } from './privateRoute';
import {Form} from '../components/form/form'
import {MainScreen} from '../components/mainScreen'
import {useSelector } from 'react-redux';

export const AppRouter = () => {

    const uid = useSelector((state) => state.auth.uid);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes
                        exact
                        path='/login'
                        isAuthenticated={Boolean(uid)}
                        component={Form}
                    />
                    <PrivateRoutes
                        exact
                        path='/'
                        isAuthenticated={Boolean(uid)}
                        component={MainScreen}
                    />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};