import React from "react";

import { connect } from "react-redux";

function TabContent(props) {
  const selected = props.tabId === props.target;

  return selected && <div>{props.children}</div>;
}

function mapStateToProps(state) {
  return {
    tabId: state.tabs.tabIndex,
  };
}

export default connect(mapStateToProps)(TabContent);
