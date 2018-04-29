"use strict"

import {DELETE_BOOK, POST_BOOK, UPDATE_BOOK} from "./types";

/**
 * Adds an array of books to the store
 *
 * @param book
 * @returns {{type: string, payload: *}}
 */
export const postBooks = (book) => {
  return {
    type: POST_BOOK,
    payload: book
  }
}

/**
 * Deletes a book from the store
 *
 * @param id
 * @returns {{type: string, payload: *}}
 */
export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
}

/**
 * Updates a book already in the store
 *
 * @param book
 * @returns {{type: string, payload: *}}
 */
export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: book
  }
}