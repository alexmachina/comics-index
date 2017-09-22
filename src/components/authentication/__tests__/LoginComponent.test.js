import React from 'react'
import { mount } from 'enzyme'
import LoginComponent from '../LoginComponent'
import sinon from 'sinon'

function setup() {
  let onClick = sinon.spy()
  const props = {
    user: {
      username: 'alexxmde',
      password: 'cthulhu1',
    },
    onUserPropChange: jest.fn(),
    errorMessage: '',
    onSubmit: onClick,
    isLoading: false,
  }

  const enzymeWrapper = mount(<LoginComponent {...props} />)

  return {
    props,
    enzymeWrapper,
    onClick,
  }
}

describe('Components', () => {
  describe('Login', () => {
    it('Should render', () => {
      const { enzymeWrapper, onClick } = setup()
      enzymeWrapper.find('form').simulate('submit')
      expect(onClick.called).toBe(true)
      expect(enzymeWrapper.find('#username-input').length).toBe(1)
      expect(enzymeWrapper.find('#password-input').length).toBe(1)
    })
  })
})
