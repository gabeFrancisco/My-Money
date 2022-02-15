import React, { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import Notification from "../widgets/Notification/Notification";

import { connect } from "react-redux";

function Notifications(props) {
  useEffect(() => props.notifications, [props, props.notifications]);
  return (
    <div className="fadeIn">
      <SectionTitle
        title="Notificações"
        subtitle="Visualize aqui as suas ultimas notificações."
      />
      {props.notifications &&
        props.notifications.map((el) => {
          return (
            <Notification
              alert={el.message.alert}
              title={el.message.title}
              message={el.message.message}
            />
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications.messageList,
  };
}

export default connect(mapStateToProps)(Notifications);
