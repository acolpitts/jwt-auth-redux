"use strict";

// ADD to cart
export const addToCart = (book) => {
  return {
    type: "ADD_TO_CART",
    payload: book
  }

}