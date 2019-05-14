import React, { useState } from "react";
import uuid from "uuid/v4";

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [nameVal, setName] = useState("");
  const [authorVal, setAuthor] = useState("");

  const handleAddBook = () => {
    let author = authors.find(author => author.name === authorVal);
    if (!author) {
      author = { id: uuid(), name: authorVal };
      setAuthors([...authors, author]);
    }

    setBooks([
      ...books,
      { id: uuid(), name: nameVal, authorId: author.id, read: false }
    ]);

    setName("");
    setAuthor("");
  };

  const removeBook = book => {
    const filteredBooks = books.filter(b => b.id !== book.id);
    setBooks(filteredBooks);
    if (book.authorId) {
      const authorExists = filteredBooks.find(
        b => b.authorId === book.authorId
      );
      if (!authorExists) {
        removeAuthor(book.authorId);
      }
    }
  };

  const removeAuthor = authorId => {
    setAuthors(authors.filter(b => b.id !== authorId));
  };

  const markAsRead = book => {
    const newBooks = books.map(b => {
      if (b.id === book.id) {
        b.read = true;
      }

      return b;
    });
    setBooks(newBooks);
  };

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <input
          placeholder="Tytul ksiazki"
          value={nameVal}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Autor"
          value={authorVal}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={handleAddBook}>Dodaj</button>

      <pre>{JSON.stringify(authors, null, 2)}</pre>
      <pre>{JSON.stringify(books, null, 2)}</pre>

      <div>
        {books.map(book => (
          <div key={book.id}>
            Tytul: {book.name} <br />
            {book.read ? "przeczytana" : "nieprzeczytana"}
            <br />
            {!book.read && (
              <button onClick={() => markAsRead(book)}>read</button>
            )}
            <button onClick={() => removeBook(book)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
