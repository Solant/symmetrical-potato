import { delay, takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { createBook, createBookSuccess } from '../modules/examples.module';

function* createBookSaga(action) {
  yield delay(1000);
  yield put(createBookSuccess(action.payload));
}

function* watchCreateBook() {
  yield takeEvery(createBook.getType(), createBookSaga);
}

export default function* root() {
  yield [watchCreateBook()];
}
