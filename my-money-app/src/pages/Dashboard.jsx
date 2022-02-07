import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ValueBox from "../widgets/ValueBox";

import axios from "axios";
import { connect } from "react-redux";

function Dashboard(props) {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("https://localhost:5001/api/BillingCycles/summary?id=1")
  //     .then((res) => setData(res.data));
  // }, []);

  const { credit, debt } = props.summary

  return (
    <div>
      <SectionTitle
        title="Dashboard"
        subtitle="Aqui você pode consultar os seus ciclos de pagamentos!"
      />
      <div className="row-content">
        <ValueBox
          color="#1abc9c"
          value={credit}
          description="Total de Créditos"
          icon="fas fa-hand-holding-usd"
        />

        <ValueBox
          color="#e74c3c"
          value={debt}
          description="Total de Débitos"
          icon="fas fa-balance-scale"
        />

        <ValueBox
          color="#3498db"
          value={credit - debt}
          description="Total de Ganhos"
          icon="fas fa-money-bill-wave"
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    summary: state.dashboard.summary
  };
}

export default connect(mapStateToProps)(Dashboard);
