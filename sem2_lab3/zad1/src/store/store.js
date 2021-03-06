import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
