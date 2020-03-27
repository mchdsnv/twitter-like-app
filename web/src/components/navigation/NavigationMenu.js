import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from '../authentication/AuthButton';

import {Menu, Icon} from 'antd';
import styled from "styled-components";

const NavMenuIcon = styled(Icon)`
    vertical-align: middle;
    color: #1890ff;
    font-size: 30px !important;
`;

const NavigationMenu = () => (
    <Menu
        mode="horizontal"
        defaultSelectedKeys={['/home']}
    >
        <Menu.Item key="/home"><Link to="/home"><NavMenuIcon type="home" /></Link></Menu.Item>
        <Menu.Item key="/feed"><Link to="/feed"><NavMenuIcon type="message" /></Link></Menu.Item>
        <Menu.Item key="/auth"><AuthButton /></Menu.Item>
    </Menu>
);

export default NavigationMenu;