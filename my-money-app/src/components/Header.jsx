import React from "react";

import "./Header.css";

function Header(props){
  return (
    <header className="main-header">
      <a href="/#/" className="Logo">
        <i class="far fa-money-bill-alt"></i>
        <span><b>My</b> Money</span>
      </a>
    </header>
  );
};

export default Header;
