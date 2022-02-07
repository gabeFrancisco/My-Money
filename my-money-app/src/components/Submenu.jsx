import React from "react";

import { Link } from 'react-router-dom'

import './Submenu.css'

function Submenu(props) {
  return (
    <div className="Submenu">
      <ul>
        <li><Link to="/billingCycle">Ciclos de Pagamento</Link></li>
      </ul>
    </div>
  );
}

export default Submenu