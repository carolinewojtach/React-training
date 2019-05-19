import React, { useState } from "react";

const AddBook = ({ addBook }) => {
  const [bookName, setBookName] = useState("");

  const handleAddBook = () => {
    addBook(bookName);
    setBookName("");
  };

  return (
    <div>
      <input
        value={bookName}
        onChange={e => setBookName(e.target.value)}
        placeholder="bookname"
      />
      <br />
      <button disabled={bookName.length === 0} onClick={handleAddBook}>
        Add book
      </button>
    </div>
  );
};

export default AddBook;
