import React, {useState} from "react";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button } from 'antd';
import {connect} from 'react-redux';
import * as postActions from '../../store/feed/feed-actions';

import moment from "moment";
import EditPostForm from "./EditPostForm";

const FullName = styled.span`
        font-weight: bold;
`;

const UserName = styled.span`
        margin: 0 5px;
        color: #657786;
`;

const Content = styled.p` 
        white-space: pre-wrap;
`;

const Date = styled.i`
        color: #657786;
`;

const ButtonGroup = styled.p`
    float: right;
    > button + button {
        margin-left: 10px;
    }
`;

const Post = ({post, deletePost}) => {
    const [state, setState] = useState({
        editFormShow: false
    });

    const showEditForm = () => {
        setState({
            editFormShow: !state.editFormShow
        })
    };

    return(
        <Row>
            <Col
                xs={24}
                sm={20}
                md={4}
                lg={4}
                xl={3}
            >
                <Avatar size={64} icon="user" />
            </Col>
            <Col
                xs={24}
                sm={20}
                md={20}
                lg={20}
                xl={21}
            >
                <Row>
                    <input
                        name="id"
                        type="hidden"
                        value={post.id}
                    />
                    <FullName>{post.author.name}</FullName>
                    <UserName>@{post.author.name}</UserName>
                    <Date>{moment( post.created_at, 'yyyy-mm-dd h:mm:ss').fromNow()}</Date>
                    <ButtonGroup>
                        <Button
                            onClick={showEditForm}
                            icon="edit"
                            type="primary"
                            ghost="true"
                        >
                        </Button>
                        <Button
                            onClick={()=>deletePost(post)}
                            icon="delete"
                            type="danger"
                            ghost="true"
                        >
                        </Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    { state.editFormShow ? <Row><Col><EditPostForm post={post} showEditForm ={showEditForm} /></Col></Row> : <Content>{post.content}</Content> }
                </Row>
            </Col>
        </Row>
    );
};

export default connect(null, postActions)(Post);