import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function SecretSpot(props) {
  return (
    <div className="container">
      <div className="row">

        <Navigation>
          <Link to="/cellar" className="nav-link">Cellar</Link>
        </Navigation>

        <div className="card col" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Secret spot</h5>
            <p className="card-text">You've managed to get inside the chest and found this secret place!</p>
          </div>
        </div >

      </div>
    </div>
  );
}