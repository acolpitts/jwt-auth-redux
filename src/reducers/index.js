"use strict";
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { authenticationReducer } from "./authentication";
import { booksReducers } from './books';
import { cartReducers} from "./cart";

// COMBINE REDUCERS
export default combineReducers({
  authenticated: authenticationReducer,
  books: booksReducers,
  cart: cartReducers
})