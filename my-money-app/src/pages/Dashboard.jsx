import React, { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import ValueBox from "../widgets/ValueBox";

import { connect } from "react-redux";

import { getSummary } from '../store/actions/dashboardActions'

function Dashboard(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.getData(), [ ])
  const { credits, debts } = props.summary;

  return (
    <div className="fadeIn">
      <SectionTitle
        title="Dashboard"
        subtitle="Aqui você pode consultar os seus ciclos de pagamentos!"
      />
      <div className="row-content">
        <ValueBox
          topColor="#1abc9c"
          bottomColor="#16a085"
          value={credits}
          description="Total de Créditos"
          icon="fas fa-hand-holding-usd"
        />

        <ValueBox
          topColor="#e74c3c"
          bottomColor="#c0392b"
          value={debts}
          description="Total de Débitos"
          icon="fas fa-balance-scale"
        />

        <ValueBox
          topColor="#3498db"
          bottomColor="#2980b9"
          value={credits - debts}
          description="Total de Ganhos"
          icon="fas fa-money-bill-wave"
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    summary: state.dashboard.summary,
  };
}

function mapDispatchToProps(dispatch){
  return{
    getData(){
      dispatch(getSummary())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
