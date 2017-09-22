import React from 'react'
import { mount } from 'enzyme'
import ArtistsComponent from '../ArtistsComponent'

function setup() {
  const props = {
    artists: [
      {
        fullname: 'Neil Gaiman',
        profilePicUrl: 'www.google.com',
      },
      {
        fullname: 'Frost Bitter',
        profilePicUrl: 'www.google.com',
      },
    ],
    onArtistPropChange: jest.fn(),
  }
  const enzymeWrapper = mount(<ArtistsComponent {...props} />)
  
  return {
    props,
    enzymeWrapper,
  }
}

describe('Components', () => {
  describe('Artists Component', () => {
    it('Should render', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('PersonsComponent').length).toBe(1)
    })
  })
})
