import { connect } from "react-redux";

import BookList from "components/BookList/BookList";

const getBooks = state => state.books;

const getFilteredBooks = state => {
  switch (state.filter) {
    case "all":
      return getBooks(state);
    case "read":
      return getBooks(state).filter(b => b.isRead);
    case "unread":
      return getBooks(state).filter(b => !b.isRead);
    default:
      return getBooks(state);
  }
};

const mapStateToProps = state => {
  return {
    books: getFilteredBooks(state)
  };
};

const BookListContainer = connect(mapStateToProps)(BookList);

export default BookListContainer;
