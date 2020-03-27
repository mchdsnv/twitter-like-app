import React from 'react';
import {connect} from 'react-redux';
import {Col, Icon, Row} from 'antd';
import SignupForm from '../authentication/SignupForm';
import * as signupActions from '../../store/auth/auth-actions';

const Signup = ({isPending}) => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col>
                    <p>Signup now</p>
                    { isPending ? <Icon type="isPending" style={{fontSize: '45px'}}/> : <SignupForm />}
                </Col>
            </div>
        </Row>
    );
};

export default connect(() => (state) => ({isPending: state.auth.isPending}), signupActions)(Signup);