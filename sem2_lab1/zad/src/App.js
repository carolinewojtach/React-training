import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Zad5UserContainer from "./containers/Zad5UserContainer";

const App = () => (
  <Provider store={store}>
    <Zad5UserContainer />
  </Provider>
);

export default App;
