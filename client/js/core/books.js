export function createBook(state, payload) {
  return {
    ...state,
  };
}

export function createBookSuccess(state, payload) {
  return [
    ...state,
    payload,
  ];
}

export function deleteBook(state, payload) {
  return state;
}

export function fetchBooks(state, payload) {
  return { ...state };
}

export function fetchBooksSuccess(state, payload) {
  return payload;
}
