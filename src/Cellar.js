import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Cellar(props) {
  return (
    <div className="container">
      <div className="row">

        <Navigation>
          <Link to="/home" className="nav-link">Upstars</Link>
        </Navigation>

        <div className="card col" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Cellar</h5>
            <p className="card-text">Here you can find locked chest with wierd message scrambled on top.</p>
            <p>Message: &quot;You must be logged to open me&quot;</p>

            <div className="my-auto d-flex justify-content-center">
              <button type="button" className="btn btn-lg btn-primary mr-2" disabled={!props.logged}>Open gently</button>
              <button type="button" className="btn btn-secondary btn-lg">Force open</button>
            </div>

          </div>
        </div >

      </div>
    </div>
  );
}