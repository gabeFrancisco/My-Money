import React from "react";

function ListItem(props) {
  return (
    <tr index={props.index}>
      <td>{props.name}</td>
      <td>{props.month}</td>
      <td>{props.year}</td>
    </tr>
  );
}

export default ListItem;
