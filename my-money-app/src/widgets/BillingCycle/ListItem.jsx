import { connect } from "react-redux";

import "./ListItem.css";

import { setEdit, setRemove } from "../../store/actions/modalActions";
import { read } from "../../store/actions/billingCycleActions";

function ListItem(props) {
  return (
    <tr className="ListItem" index={props.index}>
      <td>{props.name}</td>
      <td>{props.month}</td>
      <td>{props.year}</td>
      <td>
        <button
          onClick={() => {
            props.readBillingCycle(props.index);
            props.setEditModal(true);
          }}
          className="text-white btn btn-sm btn-primary mr-2"
        >
          <i className="fas fa-pen" />
        </button>
        <button
          onClick={() => {
            props.readBillingCycle(props.index);
            props.setRemoveModal(true);
          }}
          className="text-white btn btn-sm btn-danger mr-2"
        >
          <i className="fas fa-trash" />
        </button>
      </td>
    </tr>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setEditModal(value) {
      dispatch(setEdit(value));
    },
    setRemoveModal(value) {
      dispatch(setRemove(value));
    },
    readBillingCycle(id) {
      dispatch(read(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(ListItem);
