"use strict";

/**
 * Manages Books state
 *
 * @param state
 * @param action
 * @returns {*}
 */
export const booksReducers = (state={books:[]}, action) => {
  switch (action.type) {
    case "POST_BOOK":
      return {books: [...state.books, ...action.payload]}
      break
    case "DELETE_BOOK":
      // create a copy of the ccurrent array of books
      const currentBookToDelete = [...state.books]
      // determine at which index to delete the book
      const indexToDelete = currentBookToDelete.findIndex(
        (book) => {
          return book.id === action.payload.id;
        }
      )
      // use slice to remove the book at the specified index
      return {books: [...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)]};
      break;
    case "UPDATE_BOOK":
      // Create a copy of the current array of books
      const currentBookToUpdate = [...state.books];
      // Determine at which index to update the book
      const indexToUpdate = currentBookToUpdate.findIndex(
        (book) => {
          return book.id === action.payload.id;
        }
      )
      // Create a new book object with the new valuies and with the same array index
      // of the item we want to replace.
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }
      // debug newBookToUpdate object
      console.log('UPDATED BOOK: ', newBookToUpdate)
      // use slice to remove the book at the specified index
      // replace with new object at same index
      // concatenate the rest of the books
      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)]};
      break;
  }

  return state
}