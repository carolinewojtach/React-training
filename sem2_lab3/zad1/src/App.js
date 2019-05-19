import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
