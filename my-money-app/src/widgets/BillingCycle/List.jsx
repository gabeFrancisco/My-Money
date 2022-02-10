import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getList } from "../../store/actions/billingCycleActions";
import ListItem from "./ListItem";

function List(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.fetchData(), [props.billingCycles]);

  return (
    <div>
      <table className="table table-hover ">
        <thead className="border">
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {props.billingCycles.map((el, index) => {
            return (
              <ListItem
                index={index}
                name={el.name}
                month={el.month}
                year={el.year}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    billingCycles: state.billingCycles.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData() {
      dispatch(getList());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
