import React from "react";
import PropTypes from "prop-types";
import BookDTO from "./model/Book";

export default function Book({ book }) {
  return (
    <section>
      <hr />
      <h3 className="text-center display-4">{book.title}</h3>
      <p className="lead">{book.content}</p>
    </section>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(BookDTO).isRequired
};