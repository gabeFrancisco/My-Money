import React, { useEffect } from "react";

import ListItem from "./ListItem";

import { getList } from "../../store/actions/billingCycleActions";
import { connect } from "react-redux";
import { setCreate } from "../../store/actions/modalActions";

function List(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    props.fetchData();
  }, [props, props.billingCycles]);

  return (
    <div>
      <div className="mb-3 d-flex justify-content-lg-start">
        <button
          className="btn btn-success"
          onClick={() => props.setCreateModal(true)}
        >
          <i className="fas fa-plus m-1"></i>
          Novo ciclo!
        </button>
      </div>
      <table className="table table-hover border ">
        <thead className="border">
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.billingCycles
            .map((el) => {
              return (
                <ListItem
                  index={el.id}
                  name={el.name}
                  month={el.month}
                  year={el.year}
                />
              );
            })
            .reverse()}
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
    setCreateModal(value) {
      dispatch(setCreate(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
