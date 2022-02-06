import React, { useState } from "react";

import "./Sidebar.css";

function Sidebar(props) {
  const [collapse, setCollapse] = useState(true);
  const [sidebarStyle, setSidebarStyle] = useState("Collapse-Open");

  function changeCollapse() {
    if (collapse === true) {
      setCollapse(false);
      setSidebarStyle("Collapse-Close");
    } else {
      setCollapse(true);
      setSidebarStyle("Collapse-Open");
    }
  }

  return (
    <div className="Collapsable-Area">
      <nav className={`Sidebar ${sidebarStyle}`}>
        <ul>
          <li>
            <div className="group">
              <i class="fas fa-chart-area"></i>Dashboard
            </div>
          </li>
          <li>
            <div className="group">
              <i class="fas fa-edit"></i>Cadastro
            </div>
            <i class="fas fa-caret-down"></i>
          </li>
        </ul>
      </nav>
      <div className="Collapse-Trigger">
        <button onClick={() => changeCollapse()} id="collapse-button">
          <i class="fas fa-arrows-alt-h"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
