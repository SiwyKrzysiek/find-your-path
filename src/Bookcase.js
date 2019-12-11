import React from "react"
import { Link } from "react-router-dom"
import Navigation from "./Navigation"

export default function Bookcase(props) {
    return (
        <div className="container">
            <div className="row">

                <Navigation>
                    <Link to="/home" className="nav-link">Home (the main part)</Link>
                </Navigation>

                <div className="card col" style={{ "width": "18rem;" }}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">Bookcase</h5>
                        <p clasclassNames="card-text">Here you can take and reed books. One of them is <b>special</b>.</p>
                    </div>
                </div >

            </div>
        </div>
    );
}