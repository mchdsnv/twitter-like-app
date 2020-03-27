import React from 'react';

import Feed from '../pages/Feed';
import Notfound from '../pages/Notfound';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import Home from "../pages/Home";

import {Route, Switch} from 'react-router-dom';

const Navigation = () => {
    return (
        <Switch>
            <PrivateRoute path="/feed" component={Feed} />
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" />
            <Route path="/signup" component={Signup} />
            <Route component={Notfound} />
        </Switch>
    );
};

export default Navigation;