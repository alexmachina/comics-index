import { combineReducers } from 'redux'
import uiReducer from './ui'
import dataReducer from './data'
import { routerReducer } from 'react-router-redux'

let rootReducer = combineReducers({
    ui: uiReducer,
    data: dataReducer,
    routing: routerReducer
})

export default rootReducer
