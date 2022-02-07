import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ValueBox from "../widgets/ValueBox";

import axios from 'axios'

function Dashboard() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get("https://localhost:5001/api/BillingCycles/summary?id=1")
      .then(res => setData(res.data))
  }, [])

  return (
    <div>
      <SectionTitle
        title="Dashboard"
        subtitle="Aqui você pode consultar os seus ciclos de pagamentos!"
      />
      <div className="row-content">
        <ValueBox
          color="#1abc9c"
          value={data.credits}
          description="Total de Créditos"
          icon="fas fa-hand-holding-usd"
        />

        <ValueBox
          color="#e74c3c"
          value={data.debts}
          description="Total de Débitos"
          icon="fas fa-balance-scale"
        />

        <ValueBox
          color="#3498db"
          value={data.credits - data.debts}
          description="Total de Ganhos"
          icon="fas fa-money-bill-wave"
        />
      </div>
    </div>
  );
}

export default Dashboard;
