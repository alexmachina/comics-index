import { assert } from 'chai'

import { put, call } from 'redux-saga/effects'

import user_auth from '../user_auth'
import * as auth_actions from '../../../actions/auth'
import { set_loading } from '../../../actions/ui'
import { replace } from 'react-router-redux'

import Api from '../../../api'

test('Auth User Saga', () => {

    const api = new Api()
    const user = {
      username: 'alexxmde',
      password: 'cthulhu1'
    }
    const generator = user_auth(auth_actions.user_auth(user))

    assert.deepEqual(
      generator.next().value,
      put(set_loading(true)),
      'user_auth saga must call set loading'
    )


    assert.deepEqual(
      generator.next().value,
      call([api.Users, api.Users.fetchToken], user),
      'user_auth saga must call fetchToken API method'
    )

    assert.deepEqual(
      generator.next('sometoken').value,
      put(auth_actions.user_auth_success('sometoken')),
      'user_auth saga must register token in state'
    )

    assert.deepEqual(
      generator.next().value,
      put(set_loading(false))
    )

    assert.deepEqual(
      generator.next().value,
      put(replace('/'))
    )

})
