import { combineReducers } from 'redux'
import uiReducer from './ui'
import { routerReducer } from 'react-router-redux'

let rootReducer = combineReducers({
    ui: uiReducer,
    routing: routerReducer
})

export default rootReducer
