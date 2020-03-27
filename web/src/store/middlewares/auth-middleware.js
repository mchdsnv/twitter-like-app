import {success} from 'redux-saga-requests';

import {
    USER_LOGIN,
    USER_SIGNUP,
    USER_LOGOUT,
    APP_INIT,
} from '../auth/auth-constants';
import {fetchUser, setAuthHeader} from "../auth/auth-actions";

export default store => next => async action => {
    switch (action.type) {
        case APP_INIT:
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    next(setAuthHeader(user.access_token));
                    await next(fetchUser());
                }
            } catch (errors) {
                console.log(errors);
            }
            break;

        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            const {access_token: accessToken} = action.payload.data;
            localStorage.setItem('user', JSON.stringify({access_token: accessToken}));
            next(setAuthHeader(accessToken));
            await next(fetchUser());
            break;

        case USER_LOGOUT:
            localStorage.removeItem('user');
            break;

        default:
            break;
    }
    return next(action);
};