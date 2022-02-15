import React from "react";

import './Notification.css'

function Notification(props) {
  return (
    <div className={`Notification Notification-${props.alert}`}>
      <h6>{props.title}</h6>
      <span>{props.message}</span>
    </div>
  );
}

export default Notification;
