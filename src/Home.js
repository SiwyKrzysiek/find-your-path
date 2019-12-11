import React from "react"
import { Link } from "react-router-dom"
import Navigation from "./Navigation"

export default function Home(props) {
    return (
        <div className="container">
            <div className="row">

                <Navigation>
                    <Link to="/cellar" className="nav-link">Cellar</Link>
                    <Link to="/bookcase" className="nav-link">Bookcase</Link>
                </Navigation>

                <div className="card col" style={{ width: "18rem" }}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">Home</h5>
                        <p className="card-text">Time to go on an adventure!</p>
                    </div>
                </div >

            </div>
        </div>
    );
}