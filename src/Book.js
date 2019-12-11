import React from "react";
import PropTypes from "prop-types";
import BookDTO from "./model/Book";

export default function Book({ book }) {
  return (
    <section>
      <hr />
      <h3 className="text-center display-4">{book.title}</h3>
      <p className="lead">{book.content}</p>

      {book.isLogin &&
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Login</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      }

    </section>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(BookDTO).isRequired
};