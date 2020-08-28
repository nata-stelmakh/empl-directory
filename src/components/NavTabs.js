import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#discover" onClick={() => props.handlePageChange("Discover")} className="nav-link">
          Discover
        </a>
      </li>
      <li className="nav-item">
        <a href="#search" onClick={() => props.handlePageChange("Search")} className="nav-link">
          Search
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
