import React from "react";

import "./ListItem.css"

function ListItem(props) {
  return (
    <tr className="ListItem" index={props.index}>
      <td>{props.name}</td>
      <td>{props.month}</td>
      <td>{props.year}</td>
    </tr>
  );
}

export default ListItem;
