import { combineReducers } from 'redux'
import menu from './menu.js'

console.log('menu reducer', menu)
let uiReducer = combineReducers({
    menu
})

export default uiReducer
