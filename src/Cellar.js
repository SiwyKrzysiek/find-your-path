import React from "react"
import { Link } from "react-router-dom"
import Navigation from "./Navigation"

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
                        {/* TODO: Ability to inspect message */}
                        <p>Message: "You must be logged to open me"</p>
                    </div>
                </div >

            </div>
        </div>
    );
}