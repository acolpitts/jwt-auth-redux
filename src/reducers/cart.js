"use strict";

import {ADD_TO_CART} from "../actions/types";

/**
 * Manages Cart State
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const cartReducers = (state={cart:[]}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {cart: [...state.cart, ...action.payload]}
      break;
  }
  return state;
}