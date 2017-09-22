import { evolve } from 'ramda'

let initialState = {
    user: {
        username: 'Pacho',
        password: ''
    },
    token: ''
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER_PROP':
            const newUser = Object.assign(
                {}, state.user, {[action.prop] : action.value}
            )

            return Object.assign({}, state, {user: newUser})

        case 'USER_AUTH_SUCCESS':
            return Object.assign({}, state, {token: action.token})
        case 'USER_LOGOUT':
            return Object.assign({}, state, initialState)
        default: return state
    }
}
