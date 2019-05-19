import { ACTION_TYPES } from "../actions/actions";

export const booksReducer = (books = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BOOK:
      return [...books, action.book];
    case ACTION_TYPES.REMOVE_BOOK:
      return books.filter(b => b.id !== action.bookId);
    case ACTION_TYPES.MARK_BOOK_AS_READ:
      return books.map(b => {
        if (b.id === action.bookId) b.isRead = !b.isRead;
        return b;
      });
    default:
      return books;
  }
};
