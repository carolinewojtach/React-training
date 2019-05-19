import React from "react";
import "./Book.css";

const Book = ({ id, isRead, name, markBookAsRead, removeBook }) => {
  return (
    <div>
      <div>
        <p className={isRead === true ? "book-read" : "book-unread"}>{name}</p>
        id: {id}
      </div>
      <button onClick={() => markBookAsRead(id)}>mark as read/unread</button>
      <button onClick={() => removeBook(id)}>delete</button>
    </div>
  );
};

export default Book;
