import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainplaylistReduce from "../reducers/mainplaylistReduce";

const rootReducer = combineReducers({
  artist: mainplaylistReduce,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
