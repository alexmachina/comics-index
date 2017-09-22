import React from 'react'
import { mount } from 'enzyme'
import PersonsComponent from '../PersonsComponent'

function setup() {
  const props = {
    persons: [
      {
        fullname: 'Neil Gaiman',
        profilePicUrl: 'someprofilepicurl',
      },
      {
        fullname: 'Alan Moore',
        profilePicUrl: 'some',
      },
    ],
    onPersonPropChange: jest.fn(),
  }

  const enzymeWrapper = mount(<PersonsComponent {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Components', () => {
  describe('Persons', () => {
    it('Should render', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('PersonComponent').length).toBe(2)
    })
  })
})
