import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import developersReducer from "./developer";
import bookingsReducer from "./bookings";

const reducer = combineReducers({
  developers: developersReducer,
  bookings: bookingsReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
