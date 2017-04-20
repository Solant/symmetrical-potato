import { createAction } from 'redux-act';

import * as books from '../../core/books';

export const createBook = createAction(
  'create book action',
);

export const deleteBook = createAction(
  'delete book',
);

export const bookReducer = {
  [createBook]: (state, payload) =>
    books.createBook(state, payload),
  [deleteBook]: (state, payload) =>
    books.deleteBook(state, payload),
};
