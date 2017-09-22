import React from 'react'
import { mount } from 'enzyme'
import PersonComponent from '../PersonComponent'
import sinon from 'sinon'

function setup() {
  const onPersonPropChange = sinon.spy()
  const props = {
    person: {
      fullname: 'some name',
      profilePicUrl: 'someprofilepicurl',
    },
    onPersonPropChange: onPersonPropChange,
  }
  const enzymeWrapper = mount(<PersonComponent {...props} />)

  return {
    props,
    enzymeWrapper,
    onPersonPropChange
  }
}

describe('Components', () => {
  describe('Person', () => {
    it('Should render', () => {
      const { enzymeWrapper,
              onPersonPropChange } = setup()
      
      expect(enzymeWrapper.find('.person-fullname-input').length).toBe(1)
      const fullname = 'rodney'
      enzymeWrapper.find('.person-fullname-input').simulate('change', fullname)
      expect(onPersonPropChange.called).toBe(true)
    })
  })
})
