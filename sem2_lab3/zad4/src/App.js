import React from "react";
import { Provider } from "react-redux";
import store from "store/store";
import "./App.css";
import AddBookContainer from "containers/AddBookContainer";
import BookListContainer from "containers/BookListContainer";

function App() {
  return (
    <Provider store={store}>
      <AddBookContainer />
      <BookListContainer />
    </Provider>
  );
}

export default App;
