"use strict";
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { booksReducers } from './books';
import { cartReducers} from "./cart";

// COMBINE REDUCERS
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})