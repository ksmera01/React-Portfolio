import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light headerColor navbarFont">
      <a className="navbar-brand" href="/">
        <img src="/assets/kslogo.png" alt="iconKS" />
        <span className="">Kevin Smeraglio</span>
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <a className="nav-link text-center navbarFont" href="/">About</a>
        <a className="nav-link text-center navbarFont" href="/discover">Portfolio</a>
      </div>
    </nav>
  );
}

export default Navbar;
