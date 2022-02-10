import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getList } from "../store/actions/billingCycleActions";
import BillingCycleItem from "./BillingCycleItem";

function BillingCycleList(props) {
  useEffect(() => props.fetchData(), []);

  return (
    <div>
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">Nº</th>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {props.billingCycles.map((el, index) => {
            return (
              <BillingCycleItem
                index={index+1}
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

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
