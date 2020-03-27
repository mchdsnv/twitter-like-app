import React, { useState } from 'react';
import {connect} from 'react-redux';
import * as addPostActions from '../../store/feed/feed-actions';

import { Form, Input, Button, Icon } from 'antd';
const { TextArea } = Input;

const AddPostForm = (props) => {
    const [state, setState] = useState({
        counter: 0
    });
    const { getFieldDecorator } = props.form;

    const handleChange = (event) => {
        setState({
            counter: event.target.value.length
        });
    };

    const handlePressEnter = (event) => ((event.shiftKey) ? false : handleSubmit(event));

    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFields((error, values) => {
            if (!error) {
                props.createPost(values.content, props.user.name);
                props.form.resetFields();

                setState({
                    counter: 0
                });
            }
        });
    };

    const getContentFieldDecorator = getFieldDecorator('content', {
        rules: [{
            required: true,
            message: 'The message cannot be empty!'
        }],
    });

    return(
        <Form
            onSubmit = {handleSubmit}
        >
            <Form.Item>
                <span>What do you want for share?</span>
                <p>{state.counter}</p>
                {getContentFieldDecorator(
                    <TextArea
                        autoSize={ {minRows: 5, maxRows: 10} }
                        name="twitter_message"
                        placeholder="You can write Tweets up to 280 characters here."
                        onChange={handleChange}
                        onPressEnter={handlePressEnter}
                        maxLength="280"
                        autoFocus
                    />,
                )}
            </Form.Item>
            <Form.Item style={{ textAlign: 'right' }}>
                <Button
                    type="primary"
                    htmlType="submit">
                    <Icon type="twitter" />
                    Post now
                </Button>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.feed.posts,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, addPostActions)(Form.create({ name: 'post-form' })(AddPostForm));