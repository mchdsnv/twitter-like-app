import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';

import './App.css';
import GlobalStyle from './GlobalStyle'
import NavigationMenu from './navigation/NavigationMenu';
import Navigation from './navigation/Navigation';

import * as appActions from '../store/auth/auth-actions';

const {Header, Content} = Layout;

class App extends React.Component {

    componentDidMount() {
        this.props.appInit();
    }

    render() {
        return (
            <Layout>
                <GlobalStyle/>
                <Content>
                    <Row>
                        <Col span={12} offset={6}>
                            <Router>
                                <Header>
                                    <NavigationMenu/>
                                </Header>
                                <Navigation/>
                            </Router>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default connect(null, appActions)(App);