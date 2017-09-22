import { call, put } from 'redux-saga/effects'
import {
    fetch_writters_success,
} from '../../actions/writters'
import { something_failed } from '../../actions/ui'
import Api from '../../api'


export default function* fetchWritters(action) {
    try {
        const writters = yield call(Api.fetchWritters, action.page)
        yield put(fetch_writters_success(writters))
    } catch (error) {

        yield put(something_failed(error.message))
    }
}
