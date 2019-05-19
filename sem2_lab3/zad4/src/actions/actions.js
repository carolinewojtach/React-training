export const ACTION_TYPES = {
  ADD_BOOK: "ADD_BOOK",
  REMOVE_BOOK: "REMOVE_BOOK",
  MARK_BOOK_AS_READ: "MARK_BOOK_AS_READ"
};

const uuidv = require("uuid/v4");

export const addBook = name => ({
  type: ACTION_TYPES.ADD_BOOK,
  book: { name: name, id: uuidv(), isRead: false }
});
export const removeBook = bookId => ({
  type: ACTION_TYPES.REMOVE_BOOK,
  bookId
});
export const markBookAsRead = bookId => ({
  type: ACTION_TYPES.MARK_BOOK_AS_READ,
  bookId
});
