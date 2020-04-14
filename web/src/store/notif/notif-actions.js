import {SET_NOTIFICATION} from './notif-constants';

export const setNotification = (notifications) => {
    return ({
        type: SET_NOTIFICATION,
        payload: notifications
    })
};