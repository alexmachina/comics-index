import * as ui from '../ui'

describe('Action', () => {
  describe('ui', () => {
    it('TOGGLE_MENU_VISIBLE', () => {
      expect(ui.toggle_menu_visible()).toEqual({
        type: 'TOGGLE_MENU_VISIBLE'
      })
    })

    it('SOMETHING_FAILED', () => {
      const message = 'I failed'
      expect(ui.something_failed(message)).toEqual({
        type:'SOMETHING_FAILED',
        message
      })
    })

    it('SET_LOADING', () => {
      const isLoading = true
      expect(ui.set_loading(isLoading)).toEqual({
        type: 'SET_LOADING',
        isLoading
      })
    })
  })
})
