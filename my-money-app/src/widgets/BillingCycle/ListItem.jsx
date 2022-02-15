import { connect } from "react-redux";

import "./ListItem.css";

import { setEdit } from "../../store/actions/editTabActions";
import { read } from '../../store/actions/billingCycleActions'

function ListItem(props) {
  return (
    <tr className="ListItem" index={props.index}>
      <td>{props.name}</td>
      <td>{props.month}</td>
      <td>{props.year}</td>
      <td>
        <a
          href="#edit"
          onClick={() => {
            props.readBillingCycle(props.index)
            props.setEditTab(true)
          }}
          className="text-white btn btn-sm btn-warning mr-2"
        >
          <i className="fas fa-pen" />
        </a>
        <button className="text-white btn btn-sm btn-danger mr-2">
          <i className="fas fa-trash" />
        </button>
      </td>
    </tr>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setEditTab(value) {
      dispatch(setEdit(value));
    },
    readBillingCycle(id){
      dispatch(read(id))
    }
  };
}

export default connect(null, mapDispatchToProps)(ListItem);
