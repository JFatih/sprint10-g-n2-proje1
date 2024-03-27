import { legacy_createStore as createStore } from "redux";
import movieReducer from "../store/reducers/movieReducer.js";
import { combineReducers } from "redux";
import favoritesReducer from "../store/reducers/favoritesReducer.js";

export const reducers = combineReducers({
  movieReducer: movieReducer,
  favoritesReducer: favoritesReducer,
});

export const myStore = createStore(reducers);
