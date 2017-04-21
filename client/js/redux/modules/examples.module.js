import { createAction } from 'redux-act';

import * as books from '../../core/books';

export const createBook = createAction(
  'create book action',
);

export const deleteBook = createAction(
  'delete book',
);

export const deleteBookSuccess = createAction(
  'book successfully deleted',
);

export const createBookSuccess = createAction(
  'create book success',
);

export const fetchBooks = createAction(
  'request books fetch',
);

export const fetchBooksSuccess = createAction(
  'books successfully fetched',
);

export const bookReducer = {
  [createBook]: (state, payload) =>
    books.createBook(state, payload),
  [deleteBook]: (state, payload) =>
    books.deleteBook(state, payload),
  [createBookSuccess]: (state, payload) =>
    books.createBookSuccess(state, payload),
  [fetchBooks]: (state, payload) =>
    books.fetchBooks(state, payload),
  [fetchBooksSuccess]: (state, payload) =>
    books.fetchBooksSuccess(state, payload),
};
