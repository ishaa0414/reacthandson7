import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import StudentReducer from "./StudentReducer";

const Reducer = combineReducers({
  counterReducer: CounterReducer,
  studentReducer: StudentReducer,
});

export default Reducer