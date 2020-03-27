import {CREATE_POST, FETCH_POSTS, DELETE_POST, UPDATE_POST} from './feed-constants';

export const createPost = (content) => ({
    type: CREATE_POST,
    payload: {
        request: {
            url: `/posts`,
            method: 'POST',
            data: {content},
        },
    },
});

export const fetchPosts = (page= 1) => ({
    type: FETCH_POSTS,
    payload: {
        request: {
            url: `/posts?page=${page}`,
            method: 'GET',
        },
    },
});

export const updatePost = (post, content) => ({
    type: UPDATE_POST,
    payload: {
        request: {
            url: `/posts/${post.id}`,
            method: 'PUT',
            data: {post, content},
        },
    },
});

export const deletePost = (post) => ({
    type: DELETE_POST,
    payload: {
        request: {
            url: `/posts/${post.id}`,
            method: 'DELETE',
        },
    },
    meta: {
        post,
    },
});