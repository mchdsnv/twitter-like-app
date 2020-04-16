import React from 'react';
import {notification} from 'antd';
import {connect} from "react-redux";

class Notification extends React.Component {
    componentDidUpdate() {
        const {notifications} = this.props;
        notifications.map((message) => {
            notification.warn({
                message: 'Error',
                description: message.data.message,
                placement: 'topRight'
            });
        });
    }

    render() {
        return null;
    }
}

export default connect(()=>(state)=>({notifications: state.notif.notifications}))(Notification);