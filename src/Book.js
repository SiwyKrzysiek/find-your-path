import React from "react";
import PropTypes from "prop-types";
import BookDTO from "./model/Book";

export default function Book(props) {
  return (
    <div>{props.match.params.idBook}</div>
  );
}

Book.propTypes = {
  books: PropTypes.arrayOf(BookDTO).isRequired
};