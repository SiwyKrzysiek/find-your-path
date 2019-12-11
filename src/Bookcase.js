import React from "react"
import PropTypes from 'prop-types';
import { Link, Redirect, withRouter } from "react-router-dom"
import Navigation from "./Navigation"

import BookDTO from "./model/Book"

function Bookcase(props) {
    let bookSelect = React.createRef();

    const handleBookOpen = () => {
        const bookId = bookSelect.current.value;
        const url = `${props.match.url}/${bookId}`;
        props.history.push(url);
    }

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

                        <p className="card-text">If You want to take book of shelf select it and confirm.</p>

                        <form>
                            <div className="input-group">
                                <select ref={bookSelect} className="custom-select">
                                    {props.books.map((book, i) => (
                                        <option key={i} value={book.id}>{book.title}</option>
                                    ))}
                                </select>
                                <div className="input-group-append">
                                    <button onClick={handleBookOpen} className="btn btn-outline-secondary" type="button">Open</button>
                                    <button className="btn btn-outline-secondary" type="button">Close</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div >

            </div>
        </div>
    );
}

// Bookcase.propTypes = {
//     books: PropTypes.arrayOf(BookDTO)
// }

export default withRouter(Bookcase)