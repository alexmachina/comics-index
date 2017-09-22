import * as auth from '../auth'

describe('Actions', () => {
  describe('Auth', () => {
    it('SET_USER_PROP', () => {
      expect(auth.set_user_prop('aProp', 'aValue')).toEqual({
        type: 'SET_USER_PROP',
        prop: 'aProp',
        value: 'aValue'
      })
    })

    it('USER_AUTH', () => {
      const user = {
        username: 'dolphin',
        password: 'prada'
      }
      expect(auth.user_auth(user)).toEqual({
        type: 'USER_AUTH',
        user
      })
      
    })

    it('USER_AUTH_SUCCESS', () => {
      const token = 'mytoken'
      expect(auth.user_auth_success(token)).toEqual({
        type: 'USER_AUTH_SUCCESS',
        token
      })
    })
    it('USER_LOGOUT', () => {
      expect(auth.user_logout()).toEqual({
        type: 'USER_LOGOUT'
      })
    })
  })
})
