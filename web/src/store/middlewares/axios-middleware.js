import {DELETE_AUTH_HEADER, SET_AUTH_HEADER} from "../auth/auth-constants";
import axios from "axios";

export default store => next => async action => {
    switch (action.type) {
        case SET_AUTH_HEADER:
            console.log('rezet_debug');
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
            break;
        case DELETE_AUTH_HEADER:
            delete axios.defaults.headers.common['Authorization'];
            break;
        default:
            axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
            break;
    }
    return next(action)
};