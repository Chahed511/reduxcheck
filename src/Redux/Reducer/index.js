import { combineReducers } from "redux";
import TodoReducer from "./reducer";

const rootReducer = combineReducers({ TodoReducer });
export default rootReducer;
