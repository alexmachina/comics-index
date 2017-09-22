import { toggle_menu_visible } from './actions/ui'

export default function menuVisibleOnResize(visible, dispatch) {
  window.addEventListener('resize', () => {
    const width = window.innerWidth
    if (width > 640 && !visible()) {
      dispatch(toggle_menu_visible())
    }
  })
}
