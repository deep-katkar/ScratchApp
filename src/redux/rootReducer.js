import { combineReducers } from "@reduxjs/toolkit";
import charReducer from "./character/charSlice";
import eventReducer from "./events/eventSlice";
import midareaReducer from "./midarea/listSlice";

export const rootReducer = combineReducers({
  character: charReducer,
  list: midareaReducer,
  event: eventReducer,
});
