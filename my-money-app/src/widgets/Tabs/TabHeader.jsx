import React from "react";

import "./TabHeader.css";

function TabHeader(props) {
  return (
    <li className="TabHeader">
      <button class="styless-btn">
        <i className={props.icon}></i>
        {props.title}
      </button>
    </li>
  );
}

export default TabHeader;
