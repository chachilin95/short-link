import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import Links from '../components/Links';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Signup from '../components/Signup';

export const appRouterPaths = {
    login: '/',
    links: '/links',
    signup: '/signup'
};

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path={appRouterPaths.login} component={Login}/>
                <Route exact path={appRouterPaths.links} component={Links}/>
                <Route exact path={appRouterPaths.signup} component={Signup}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;