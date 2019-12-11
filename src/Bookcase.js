import React from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import Navigation from "./Navigation"

import BookDTO from "./model/Book"

export default function Bookcase(props) {
    return (
        <div className="container">
            <div className="row">

                <Navigation>
                    <Link to="/home" className="nav-link">Home (the main part)</Link>
                </Navigation>

                <div className="card col" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Bookcase</h5>
                        <p className="card-text">Here you can take and reed books. One of them is <b>special</b>.</p>
                    </div>
                </div >

            </div>
        </div>
    );
}

Bookcase.propTypes = {
    books: PropTypes.arrayOf(BookDTO)
}