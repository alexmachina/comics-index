import { combineReducers } from 'redux'
import writtersDomain from './writtersDomain'
import artistsDomain from './artistsDomain'
import authDomain from './authDomain'

const dataReducer = combineReducers({
    writtersDomain,
    artistsDomain,
    authDomain
})

export default dataReducer
