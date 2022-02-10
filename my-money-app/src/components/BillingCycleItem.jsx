import React from "react";

function BillingCycleItem(props) {
  return (
    <tr index={props.index}>
      <td>{props.name}</td>
      <td>{props.month}</td>
      <td>{props.year}</td>
    </tr>
  );
}

export default BillingCycleItem;
