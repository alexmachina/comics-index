let initialState = {
    isLoading: false
}

export default function loading(state = initialState, action) {
    switch(action) {
        case 'SET_LOADING':
            return Object.assign({}, state, { isLoading: action.isLoading })
        default: return state
    }
}
