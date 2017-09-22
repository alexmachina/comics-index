import { combineReducers } from 'redux'
import menu from './menu.js'
import pagination from './pagination'
import messages from './messages'
import loading from './loading'

console.log('menu reducer', menu)
let uiReducer = combineReducers({
    menu,
    pagination,
    messages,
    loading
})

export default uiReducer
