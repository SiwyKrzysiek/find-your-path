import React from "react";
import { Link } from "react-router-dom"

export default function Navigation(props) {
    return (
        <div className="card col-3 navigation">
            <div className="card-body">

                <h5 className="card-title">Navigation</h5>

                <ul class="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}