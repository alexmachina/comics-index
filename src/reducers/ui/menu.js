import { evolve } from 'ramda'

const initialState = {
    visible: Boolean(window.innerWidth > 640)
}

export default function menu(state = initialState, action) {
    switch (action.type) {
    case 'TOGGLE_MENU_VISIBLE':
	let transformation = {
	    visible: !state.visible

	}
	
	return evolve(state, transformation)
    default:
	return state
    }
}
