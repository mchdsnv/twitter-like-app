import React from 'react';
import {notification} from 'antd';

const Notification = ({notifications}) => {
    return notifications.map((message) => {
        notification.error({
            message: 'Error',
            description: message.data.message,
            placement: "topRight"
        });
    });
};

export default Notification;