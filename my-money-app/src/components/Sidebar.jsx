import React, { useState } from "react";

import "./Sidebar.css";
import Submenu from "./Submenu";

import { Link } from "react-router-dom";

function Sidebar(props) {
  const [sidebarCollapse, setSidebarCollapse] = useState(true);
  const [sidebarStyle, setSidebarStyle] = useState("Collapse-Open");

  function changeCollapseSideBar() {
    if (sidebarCollapse === true) {
      setSidebarCollapse(false);
      setSidebarStyle("Collapse-Close");
    } else {
      setSidebarCollapse(true);
      setSidebarStyle("Collapse-Open");
    }
  }

  const [submenuCollapse, setSubmenuCollapse] = useState(true);

  function changeCollapseSubMenu() {
    submenuCollapse === true
      ? setSubmenuCollapse(false)
      : setSubmenuCollapse(true);
  }

  return (
    <div className="Collapsable-Area">
      <nav className={`Sidebar ${sidebarStyle}`}>
        <div className="Logo-Wrapper">

        <Link to="/" className="Logo">
          <i class="far fa-money-bill-alt"></i>
          <span>
            <b>My</b> Money
          </span>
        </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className="Menu-Item">
              <div className="Menu-Item">
                <div className="group">
                  <i class="fas fa-chart-area"></i>
                  Dashboard
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div onClick={() => changeCollapseSubMenu()} className="Menu-Item">
              <div className="group">
                <i class="fas fa-edit"></i>Cadastro
              </div>
              <i class="fas fa-caret-down"></i>
            </div>
            {submenuCollapse && <Submenu />}
          </li>
        </ul>
      </nav>
      <div className="Collapse-Trigger">
        <button onClick={() => changeCollapseSideBar()} id="collapse-button">
          <i class="fas fa-arrows-alt-h"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
