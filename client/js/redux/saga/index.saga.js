import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import isomorphicFetch from 'isomorphic-fetch';
import { createBook, createBookSuccess, fetchBooks, fetchBooksSuccess, deleteBook, deleteBookSuccess } from '../modules/examples.module';

function* createBookSaga(action) {
  const data = yield isomorphicFetch('http://localhost:3000/api/book/add', {
    method: 'POST',
    body: JSON.stringify(action.payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  data.id = data._id;
  yield put(createBookSuccess(data));
}

function* getBooksSaga(action) {
  let pageNumber;
  let pageSize;
  if (action.payload !== undefined) {
    pageNumber = action.payload.pageNumber;
    pageSize = action.payload.pageSize;
  } else {
    pageNumber = 0;
    pageSize = 10;
  }
  const data = yield isomorphicFetch(`http://localhost:3000/api/book/list/${pageNumber}/${pageSize}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    return response.json();
  });
  yield put(fetchBooksSuccess(data));
}

function* deleteBookSaga(action) {
  // console.log(action);
  yield isomorphicFetch(`http://localhost:3000/api/book/${action.payload}`, {
    method: 'DELETE',
  });
  const state = yield select();
  const pageNumber = state.books.pageNumber;
  const pageSize = state.books.pageSize;
  yield put(fetchBooks({ pageNumber, pageSize }));
}

function* watchCreateBook() {
  yield takeEvery(createBook.getType(), createBookSaga);
}

function* watchDeleteBook() {
  yield takeEvery(deleteBook.getType(), deleteBookSaga);
}

function* watchGetBooks() {
  yield takeEvery(fetchBooks.getType(), getBooksSaga);
}

export default function* root() {
  yield [watchCreateBook(), watchGetBooks(), watchDeleteBook()];
}
