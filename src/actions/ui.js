export function toggle_menu_visible() {
    return {
	type: 'TOGGLE_MENU_VISIBLE'
    }
}

export function something_failed(message) {
    return {
        type: 'SOMETHING_FAILED',
        message
    }
}

export function set_loading(isLoading) {
    return {
        type: 'SET_LOADING',
        isLoading
    }
}
