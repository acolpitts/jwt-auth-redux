"use strict";

// ADD to cart
import {ADD_TO_CART} from "./types";

export const addToCart = (book) => {
  return {
    type: ADD_TO_CART,
    payload: book
  }

}