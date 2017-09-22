export function set_user_prop(prop, value) {
    return {
        type: 'SET_USER_PROP',
        prop,
        value
    }
}

export function user_auth(user) {
    return {
        type: 'USER_AUTH',
        user
    }
}

export function user_auth_success(token) {
    return {
        type: 'USER_AUTH_SUCCESS',
        token
    }
}

export function user_logout() {
    return {
        type: 'USER_LOGOUT'
    }
}
