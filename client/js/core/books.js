export function createBook(state, payload) {
  const newBook = payload;
  return [
    ...state,
    newBook,
  ];
}

export function deleteBook(state, payload) {
  return state.filter(book => book.id !== payload);
}
