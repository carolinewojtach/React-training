import { createStore } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

export default createStore(reducer, applyMiddleware(logger, thunk));
