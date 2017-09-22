import { call, put } from 'redux-saga/effects'
import { something_failed } from '../../actions/ui'
import Cookies from 'universal-cookie'
import { replace } from 'react-router-redux'

export default function* user_logout() {
    try {
      let cookies = new Cookies()
      cookies.remove('token')

      yield put(replace('/'))
    } catch (error) {
        yield put(something_failed(error))
    }
}
