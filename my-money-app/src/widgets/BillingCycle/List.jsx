import React, { useEffect } from "react";

import SectionTitle from "../../components/SectionTitle";
import ListItem from "./ListItem";

import { getList } from "../../store/actions/billingCycleActions";
import { connect } from "react-redux";

function List(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    props.fetchData();
  }, [props, props.billingCycles]);

  return (
    <div>
      <SectionTitle title="Ciclos" />
      <table className="table table-hover ">
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
