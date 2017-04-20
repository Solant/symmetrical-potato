import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import isomorphicFetch from 'isomorphic-fetch';
import { createBook, createBookSuccess } from '../modules/examples.module';

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

function* watchCreateBook() {
  yield takeEvery(createBook.getType(), createBookSaga);
}

export default function* root() {
  yield [watchCreateBook()];
}
