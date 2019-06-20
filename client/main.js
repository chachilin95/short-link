import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Login from './../imports/ui/Login';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Signup from './../imports/ui/Signup';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/links" component={Link}/>
        <Route path="/signup" component={Signup}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});