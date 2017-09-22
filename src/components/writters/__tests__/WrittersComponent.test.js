import React from 'react'
import { mount } from 'enzyme'
import WrittersComponent from '../WrittersComponent'

function setup() {
  const props = {
    writters: [
      {
        fullname: 'Alex Alonso',
        profilePicUrl: 'someurl',
      },
      {
        fullname: 'Johnny Brown',
        profilePicUrl: 'someurl',
      },
    ],
    onWritterPropChange: jest.fn(),
  }

  const enzymeWrapper = mount(<WrittersComponent {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('Components', () => {
  describe('Writters', () => {
    it('Should render', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('PersonComponent').length).toBe(2)
    })
  })
})
