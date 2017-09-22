import { evolve } from 'ramda'
let initialState = {
    message: null
}
export default function messages(state = initialState, action) {

    switch (action.type) {
        case 'SOMETHING_FAILED':
            const transformation = {
                message: action.message
            }

            return evolve(state, transformation)
        default: return state
    }
}
