import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    user ? <Route {...rest} render={ (props) => <Component {...props} /> } /> : <Redirect to="/login" />
);
export default connect(()=>(state)=>({user: state.auth.user}))(PrivateRoute);