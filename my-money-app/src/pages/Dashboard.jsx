import React from "react";
import SectionTitle from "../components/SectionTitle";
import ValueBox from "../widgets/ValueBox";

function Dashboard() {
  return (
    <div>
      <SectionTitle
        title="Dashboard"
        subtitle="Aqui você pode consultar os seus ciclos de pagamentos!"
      />
      <div className="row-content">
        <ValueBox
          color="#1abc9c"
          value="17.455"
          description="Total de Créditos"
          icon="fas fa-hand-holding-usd"
        />

        <ValueBox
          color="#e74c3c"
          value="4.417"
          description="Total de Débitos"
          icon="fas fa-balance-scale"
        />

        <ValueBox
          color="#3498db"
          value="13.479"
          description="Total de Ganhos"
          icon="fas fa-money-bill-wave"
        />
      </div>
    </div>
  );
}

export default Dashboard;
