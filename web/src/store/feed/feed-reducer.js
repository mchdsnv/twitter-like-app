import { success, error } from 'redux-saga-requests';
import {CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS} from './feed-constants';
import {APP_INIT} from "../auth/auth-constants";

const initialState = {
    isPending: false,
    posts: [],
    current_page: 1,
    per_page: 5,
    total: 0,
    errors: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
        case UPDATE_POST:
        case DELETE_POST:
        case FETCH_POSTS:
            return {
                ...state,
                isPending: true
            };

        case success(CREATE_POST):
            return {
                ...state,
                isPending: false,
                posts: [...state.posts, action.payload.data],
                errors: []
            };

        case success(FETCH_POSTS):
            const { data: posts, current_page, per_page, total} = action.payload.data;
            return {
                ...state,
                isPending: false,
                posts,
                total,
                per_page,
                current_page,
                errors: []
            };

        case success(UPDATE_POST):
            return {
                ...state,
                isPending: false,
                posts: state.posts.map(post => post.id === action.payload.data.id ? {...post, content: action.payload.data.content, editing: !post.editing} : post),
                errors: []
            };

        case success(DELETE_POST):
            return {
                ...state,
                isPending: false,
                posts: state.posts.filter(post => post.id !== action.meta.post.id),
                errors: []
            };

        case error(CREATE_POST):
        case error(UPDATE_POST):
        case error(DELETE_POST):
        case error(FETCH_POSTS):
            return {
                ...state,
                errors: action.error
            };

        default:
            return state;
    }
};

export default reducer;