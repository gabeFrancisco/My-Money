import React from "react";

import "./NotificationPopup.css";

function NotificationPopup(props) {
  return (
    <div className={`NotificationPopup NotificationPopup-${props.alert}`}>
      <div className="Notification-Area">
        <div>
          <i className={`fas fa-${props.icon}`}></i>
        </div>
        <div>
          <h5>{props.title}</h5>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default NotificationPopup;
