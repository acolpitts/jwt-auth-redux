"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';

// IMPORT ACTION CREATORS
import { addToCart } from './actions/cart';
import { postBooks, deleteBook, updateBook } from "./actions/books";

// Step 1:  Create middleware and the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// STEP 2 create and dispatch actions
// CREATE BOOKS
store.dispatch(
  postBooks([
    {
      id: 1,
      title: 'Awesome book title',
      description: 'Some amazing book you need to read',
      price: 33.99
    },
    {
      id: 2,
      title: 'Second book title',
      description: 'Book description to come',
      price: 12.34
    }
]));

// DELETE BOOK
store.dispatch(deleteBook({id: 1}));

// UPDATE BOOK
store.dispatch(updateBook({
    id: 2,
    title: 'Simple redux starter app'
  }));

// ADD TO CART
store.dispatch(addToCart([{id: 1}]))