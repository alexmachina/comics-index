import { call, put } from 'redux-saga/effects'
import {
  user_auth_success
} from '../../actions/auth'
import { something_failed, set_loading } from '../../actions/ui'
import Api from '../../api'
import Cookies from 'universal-cookie'
import { replace } from 'react-router-redux'

export default function* user_auth(action) {
  try {
    const api = new Api()

    yield put(set_loading(true))
    
    const token = yield call([api.Users, api.Users.fetchToken], action.user)
    const cookies = new Cookies()
    
    cookies.set('token', token)

    yield put(user_auth_success(token))
    yield put(set_loading(false))
    yield put(replace('/'))
  } catch (error) {
    console.log(error)
    yield put(set_loading(false))
    yield put(something_failed(error.message))
  }
}








