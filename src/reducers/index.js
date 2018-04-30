"use strict";
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// IMPORT REDUCERS
import authReducer from './auth';
import { booksReducers } from './books';
import { cartReducers} from "./cart";

// COMBINE REDUCERS
export default combineReducers({
  auth: authReducer,
  books: booksReducers,
  cart: cartReducers,
  form: formReducer
})