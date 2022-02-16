import React from "react";

import './Notification.css'

function Notification(props) {
  return (
    <div className={`Notification Notification-${props.alert}`}>
      <span><b>{props.title}: </b>{props.message}</span>
      <i className={`fas fa-${props.icon}`}></i>
    </div>
  );
}

export default Notification;
