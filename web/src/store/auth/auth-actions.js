import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, APP_INIT, SET_AUTH_HEADER} from './auth-constants';

export const appInit = () => ({
    type: APP_INIT
});

export const setAuthHeader = (access_token) => {
    return ({
        type: SET_AUTH_HEADER,
        payload: access_token
    })
};

export const userLogin = ({email, password}) => ({
    type: USER_LOGIN,
    payload: {
        request: {
            url: `/auth/login`,
            method: 'POST',
            data: {email, password},
        },
    },
});

export const userSignup = ({name, email, password}) => ({
    type: USER_SIGNUP,
    payload: {
        request: {
            url: `/auth/signup`,
            method: 'POST',
            data: {name, email, password}
        },
    },
});

export const userLogout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
        payload: {
            request: {
                url: `/auth/logout`,
                method: 'POST',
            },
        },
    });
};

export const fetchUser = () => ({
    type: FETCH_USER,
    payload: {
        request: {
            url: `/user`,
            method: 'GET',
        },
    },
    meta: {
        asPromise: true,
    }
});