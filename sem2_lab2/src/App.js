import React, { useState } from "react";
const uuid = require("uuid/v4");

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const titleInput = React.createRef();

  const handleAddBook = () => {
    let authorFind = authors.find(e => e.name === author);

    if (!authorFind) {
      authorFind = { name: author, id: uuid() };
      setAuthors([...authors, authorFind]);
    }

    setBooks([
      ...books,
      { title: title, id: uuid(), authorId: authorFind.id, read: false }
    ]);
    setTitle("");
    setAuthor("");
  };

  const markAsRead = id => {
    const newBooks = books.map(b => {
      if (b.id === id) {
        b.read = true;
      }
      return b;
    });

    setBooks(newBooks);
  };

  const deleteBook = book => {
    const newBooks = books.filter(e => e.id !== book.id);

    const shouldRemoveAuthor = !newBooks.find(
      e => e.authorId === book.authorId
    );
    if (shouldRemoveAuthor) {
      deleteAuthor(book.authorId);
    }
    setBooks(newBooks);
  };

  const deleteAuthor = id => {
    const newAuthors = authors.filter(e => e.id !== id);
    setAuthors(newAuthors);
  };

  const editBook = book => {
    let author = authors.find(e => e.id === book.authorId);
    setTitle(book.title);
    setAuthor(author.name);
    titleInput.current.focus();
  };

  return (
    <div>
      <h1>Biblioteka </h1>
      <div>
        <input
          ref={titleInput}
          value={title}
          placeholder="tytuł książki"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          value={author}
          placeholder="autor"
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={handleAddBook}>Dodaj</button>
      <div>
        <h4>Lista ksiażek</h4>
        <pre> {JSON.stringify(authors, null, 2)} </pre>
        <pre> {JSON.stringify(books, null, 2)} </pre>
        <div>
          {books.map(b => (
            <div key={b.id}>
              Tytuł:
              {b.title}
              <div> {b.read ? "przeczytana" : "nieprzeczytana"}</div>
              {}
              <div>
                <button onClick={() => deleteBook(b)}>Usuń</button>
                <button onClick={() => editBook(b)}>Edytuj</button>
                {b.read === false && (
                  <button onClick={() => markAsRead(b.id)}>Przeczytana</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
