"use strict";

/**
 * Manages Cart State
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const cartReducers = (state={cart:[]}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("TRY");
      return {cart: [...state.cart, ...action.payload]}
      break;
  }
  return state;
}