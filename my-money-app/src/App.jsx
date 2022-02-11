import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import BillingCycle from "./pages/BillingCycle";
import Notification from "./widgets/Notification/Notification";

import { connect } from "react-redux";

function App(props) {
  useEffect(() => props.notifications && console.log(props.notifications), [props, props.notifications]);
  return (
    <div>
      <Router>
        <div className="App-Area">
          <Sidebar />
          <div className="m-4 mt-5 Content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/billingCycle" element={<BillingCycle />} />
            </Routes>
          </div>
          {props.notifications &&
            props.notifications.map((el) => (
              <Notification
                alert={el.message.alert}
                title={el.message.title}
                message={el.message.message}
              />
            ))}
        </div>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications.messageList
  };
}

export default connect(mapStateToProps)(App);
