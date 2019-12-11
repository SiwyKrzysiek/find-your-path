import React from "react";
import PropTypes from "prop-types";
import BookDTO from "./model/Book";

export default function Book({ book }) {
  return (
    <div>{book.title}</div>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(BookDTO).isRequired
};