import { takeLatest, put, call } from 'redux-saga/effects';
import { Endpoint, Messages } from '../utils/constants';
import { USER_LOGIN, CHECK_AUTH, USER_LOGOUT, UPDATE_USER_DATA, RESET_PASSWORD } from '../actions/constants';
import { fetchService } from '../utils/index';

export function* checkAuthorization() {
  try {
    const response = yield call(fetchService, {
      url: Endpoint.USER_LOGIN + '/1/validate.json',
      method: 'GET',
      xhr: true,
      withCredentials: true
    });
    if (response.apiError) {
      yield put({
        type: UPDATE_USER_DATA,
        data: {
          isLogin: null
        }
      });
      return;
    }
    if (response.success) {
      yield put({
        type: UPDATE_USER_DATA,
        data: {
          isLogin: response.user && response.user.uuid ? true : false,
          ...response
        }
      });
    } else {
      yield put({
        type: UPDATE_USER_DATA,
        data: {
          errorMsg: Messages.API_BROKEN
        }
      });
    }
  } catch (e) {
    yield put({
      type: UPDATE_USER_DATA,
      data: {
        isLogin: null,
        errorMsg: e.message
      }
    });
  }
}

function* loginSubmit({ data, cb }) {
  try {
    const response = yield call(fetchService, {
      payload: data,
      method: 'POST',
      url: Endpoint.USER_LOGIN + '.json'
    });
    cb(response);
  } catch (e) {
    cb({
      errorMsg: e.msg || e
    });
  }
}

function* resetPassword({ data, cb }) {
  try {
    const response = yield call(fetchService, {
      payload: data,
      method: 'POST',
      url: Endpoint.RESET_PASSWORD + '.json'
    });
    cb(response);
  } catch (e) {
    cb({
      errorMsg: e.msg || e
    });
  }
}

function* logout({ data, cb }) {
  try {
    const response = yield call(fetchService, {
      method: 'POST',
      url: Endpoint.USER_LOGIN + '/1/logout.json'
    });
    cb(response);
  } catch (e) {
    cb({
      errorMsg: e.message || e
    });
  }
}

function* pageWatcher() {
  yield takeLatest(USER_LOGIN, loginSubmit);
  yield takeLatest(CHECK_AUTH, checkAuthorization);
  yield takeLatest(USER_LOGOUT, logout);
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

export default pageWatcher;
