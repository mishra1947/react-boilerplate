import { all } from 'redux-saga/effects';

import auth from './auth';

export default function* IndexSaga() {
  yield all([
    auth()
  ]);
}
