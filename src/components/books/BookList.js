import React, { PropTypes } from "react";
import BookTile from "./BookTile";

const BookList = ({ books }) => {
  return <div className="book-list-panel">{books.map(book => <BookTile key={book.id} book={book} />)}</div>;
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
