import { toggle_menu_visible } from './actions/ui.js'

export function menuVisibleOnResize(visible, dispatch) {
    window.addEventListener('resize', function() {
	const width = window.innerWidth
	if (width > 640 && !visible())
	    dispatch(toggle_menu_visible())
    })
}
