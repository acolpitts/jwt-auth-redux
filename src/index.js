"use strict"
// REACT + REDUX
import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import history from './history';
import config from '../config';

// COMBINED REDUCERS
import reducers from './reducers';

// ACTION CREATORS
import { addToCart } from './actions/cart';
import { postBooks, deleteBook, updateBook } from "./actions/books";

// COMPONENTS
import App from './components/App';
import {AUTH_USER} from "./actions/types";


// Step 1:  Create middleware and the store
let middleware
config.ENV === "production" ?
  middleware = applyMiddleware(reduxThunk) :
  middleware = applyMiddleware(logger, reduxThunk);

const store = createStore(reducers, middleware)

// If we have a token, consider the user to be signed in
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.querySelector('.app-root'));


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
    },
    {
      id: 3,
      title: '3 book title',
      description: 'Book description to come',
      price: 12.34
    },
    {
      id: 4,
      title: '4 book title',
      description: 'Book description to come',
      price: 12.34
    }
]));


// ADD TO CART
//store.dispatch(addToCart([{id: 1}]))