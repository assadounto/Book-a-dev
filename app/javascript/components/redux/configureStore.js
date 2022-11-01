import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import developersReducer from "./developer";

const reducer = combineReducers({
  developers: developersReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
