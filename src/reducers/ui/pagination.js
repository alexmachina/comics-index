import { evolve } from 'ramda'

const initialState = {
    activePage: 1
}

export default function Pagination(state = initialState, action) {
    switch (action) {
        case 'SET_ACTIVE_PAGE':
            const transformation = {
                activePage: action.activePage
            }
            return evolve(state, activePage)
        default: return state
    }
}
