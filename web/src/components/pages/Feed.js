import React from 'react';
import Posts from '../post/Posts';
import * as feedActions from '../../store/feed/feed-actions';
import {connect} from 'react-redux';
import {Pagination} from 'antd';
import AddPostForm from '../post/AddPostForm';
import styled from "styled-components";

const FeedPagination = styled(Pagination)`
        margin: 15px auto;
        width: 50%;
        text-align: center;
`;

class Feed extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleChange = (page) => {
        this.props.fetchPosts(page);
    };

    render () {
        const {posts} = this.props;
        return (
            <>
                <AddPostForm />
                <Posts />
                <FeedPagination
                    defaultCurrent={1}
                    defaultPageSize={5}
                    current={posts.current_page}
                    pageSize={posts.per_page}
                    total={posts.total}
                    onChange={(page)=>this.handleChange(page)}
                    hideOnSinglePage={true}
                />
            </>
        );
    }
}

export default connect(()=>(state)=>({posts: state.feed}), feedActions)(Feed);