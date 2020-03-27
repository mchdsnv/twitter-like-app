import { success, error } from 'redux-saga-requests';
import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, APP_INIT} from './auth-constants';

const initialState = {
    user: null,
    errors: [],
    isPending: false,
    isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
        case FETCH_USER:
        case USER_SIGNUP:
        case USER_LOGOUT:
            return {
                ...state,
                isPending: true,
                isAuthenticated: false,
                errors: [],
            };

        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            return {
                ...state,
                isPending: false,
                isAuthenticated: true,
                user: action.payload.data,
                errors: [],
            };

        case success(FETCH_USER):
            return {
                ...state,
                isPending: false,
                isAuthenticated: true,
                user: action.payload.data,
                errors: [],
            };

        case success(USER_LOGOUT):
            return {
                ...initialState,
            };

        case error(FETCH_USER):
        case error(USER_LOGIN):
        case error(USER_SIGNUP):
        case error(USER_LOGOUT):
            return {
                ...state,
                user: null,
                isPending: false,
                isAuthenticated: false,
                errors: action.error,
            };

        default:
            return state;
    }
};

export default reducer;