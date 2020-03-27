import React from 'react';
import {connect} from 'react-redux';
import {Col, Row, Icon } from 'antd';
import LoginForm from '../authentication/LoginForm';
import * as loginActions from '../../store/auth/auth-actions';

const Login = ({isPending}) => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col span={8} offset={8}>
                    <p>You must log in to view the page</p>
                    { isPending ? <Icon type="loading" style={{fontSize: '45px'}}/>: <LoginForm /> }
                </Col>
            </div>
        </Row>
    );
};

export default connect(() => (state) => ({isPending: state.auth.isPending}), loginActions)(Login);