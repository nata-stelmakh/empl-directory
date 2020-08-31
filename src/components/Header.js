import React from "react";
import "../style/style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          This is an app that helps to see information about all of your
          employees
        </p>
      </div>
    </div>
  );
}

export default Header;
