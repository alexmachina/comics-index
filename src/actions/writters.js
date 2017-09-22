export function set_writter_prop(prop, value) {
    return {
        type: 'SET_WRITTER_PROP',
        prop,
        value
    }
}

export function fetch_writters(page) {
    return {
        type: 'FETCH_WRITTERS',
        page
    }
}

export function fetch_writters_success(writters) {
    return {
        type: 'FETCH_WRITTERS_SUCCESS',
        writters
    }
}
