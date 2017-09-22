import { takeEvery } from 'redux-saga/effects'
import fetchWritters from './writters/fetch_writters'
import user_auth from './auth/user_auth'
import user_logout from './auth/user_logout'

export default function* rootSaga() {
  yield takeEvery('FETCH_WRITTERS', fetchWritters)
  yield takeEvery('USER_AUTH', user_auth)
  yield takeEvery('USER_LOGOUT', user_logout)
}
