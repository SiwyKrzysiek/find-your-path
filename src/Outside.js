import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Outside(props) {
  return (
    <div className="container">
      <div className="row">

        <Navigation>
          <Link to="/home" className="nav-link">Home</Link>
        </Navigation>

        <div className="card col" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Outside</h5>
            <p className="card-text">Suddenly you were blinded by flash of white light. After a while you woked up in front of the entrence to the house.</p>
          </div>
        </div >

      </div>
    </div>
  );
}