import { put, call } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { something_failed } from '../../../actions/ui'
import user_logout from '../../../sagas/auth/user_logout'

describe('Saga', () => {
  describe('Auth', () => {
    it('User logout', () => {
      const generator = user_logout()
      expect(generator.next().value).toEqual(put(replace('/')))
    })

    it('Handle user logout exception', () => {
      const generator = user_logout()
      generator.next()
      const error = new Error('error caused by test')
      const ex = generator.throw(error).value
      
      expect(ex).toEqual(put(something_failed(error)))
    })
  })
})

    
