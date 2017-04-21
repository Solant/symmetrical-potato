export function createBook(state, payload) {
  return [
    ...state,
  ];
}

export function createBookSuccess(state, payload) {
  const newBook = payload;
  return [
    ...state,
    newBook,
  ];
}

export function deleteBook(state, payload) {
  return state.filter(book => book.id !== payload);
}
