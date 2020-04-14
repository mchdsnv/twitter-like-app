import {SET_NOTIFICATION} from './notif-constants';

const initialState = {
    notifications: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                notifications: [action.payload],
            };

        default:
            return state;
    }
};

export default reducer;