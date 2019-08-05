import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { RouterPaths } from '../types/app.types';

import Links from '../components/Links';
import Login from '../components/Login';
import Signup from '../components/Signup';
import NotFound from '../components/NotFound';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PrivateRoute exact path={RouterPaths.LINKS} component={Links}/>
                <PublicRoute exact path={RouterPaths.LOGIN} component={Login}/>
                <PublicRoute exact path={RouterPaths.SIGNUP} component={Signup}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;