import React from "react";
import BookContainer from "containers/BookContainer";

const BookList = ({ books }) => {
  return (
    <div>
      <br />
      <h3>Book List</h3>
      {books.map(book => (
        <BookContainer key={book.id} {...book} />
      ))}
    </div>
  );
};

BookList.defaultProps = {
  books: []
};

export default BookList;
