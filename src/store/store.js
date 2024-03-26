import { legacy_createStore as createStore } from "redux";
import movieReducer from "../store/reducers/movieReducer.js";
import reducers from "./reducers/index.js";

export const myStore = createStore(reducers);
