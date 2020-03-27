import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import * as authButtonActions from '../../store/auth/auth-actions';
import {Icon} from "antd";
import styled from "styled-components";

const NavMenuIcon = styled(Icon)`
    vertical-align: middle;
    color: #1890ff;
    font-size: 30px !important;
`;

const AuthButton = withRouter(({ user, userLogout }) => (
    user
    ? <Link to="/home" onClick={userLogout}><NavMenuIcon type="logout" /></Link> : <Link to="/login"><NavMenuIcon type="login" /></Link>
));

export default connect(()=>(state)=>({user: state.auth.user}), authButtonActions)(AuthButton);