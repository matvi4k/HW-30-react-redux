import { createStore } from "redux";
import phoneBookReducer from "./phoneBookReducer";

export const store = createStore(phoneBookReducer);
