import React from "react";

function BillingCycleItem(props) {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.name}</td>
      <td>{props.month}</td>
      <td>{props.year}</td>
    </tr>
  );
}

export default BillingCycleItem;
