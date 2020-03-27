import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as loginActions from '../../store/auth/auth-actions';

import { Form, Icon, Input, Button } from 'antd';
import './LoginForm.css';

const LoginForm = (props) => {

    if (props.user) {
        return <Redirect to='/feed' />
    }

    const { getFieldDecorator } = props.form;

    const handlePressEnter = (event) => ((event.shiftKey) ? false : handleSubmit(event));

    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFields((error, values) => {
            if (!error) {
                props.userLogin(values);
            }
        });
    };

    const getEmailFieldDecorator = getFieldDecorator('email', {
        rules: [{
            required: true,
            message: 'Please input your E-mail!'
        }],
    });

    const getPasswordFieldDecorator = getFieldDecorator('password', {
        rules: [{
            required: true,
            message: 'Please input your Password!'
        }],
    });

    return (
        <Form
            onSubmit={handleSubmit}
            className="login-form">
            <Form.Item>
                {getEmailFieldDecorator(
                    <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                        onPressEnter={handlePressEnter}
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getPasswordFieldDecorator(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        onPressEnter={handlePressEnter}
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Log in
                </Button>
                Or <a href="/signup">signup now!</a>
            </Form.Item>
        </Form>
    );
};

export default connect(()=>(state)=>({user: state.auth.user}), loginActions)(Form.create({ name: 'login-form' })(LoginForm));