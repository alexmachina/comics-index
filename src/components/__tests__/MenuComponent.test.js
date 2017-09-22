import React from 'react'
import { mount } from 'enzyme'
import MenuComponent from '../MenuComponent'
import { menuItems, brand } from '../../routes'
import sinon from 'sinon'
import styled from 'styled-components'


function setup() {
  const MobileView = styled.div`
    width: 320px;
    height: 400px;
`
  const onLogoutClick = sinon.spy()
  const onMenuVisibleToggle = sinon.spy()
  const props = {
    brand,
    items: menuItems,
    visible: false,
    match: null,
    router: { isActive: (a, b) => true},
    onMenuVisibleToggle,
    onLogoutClick,
  }

  const enzymeWrapper = mount(<MobileView>
                              <MenuComponent {...props} />
                              </MobileView>)

  return {
    onLogoutClick,
    props,
    enzymeWrapper,
    onMenuVisibleToggle,
  }
}

describe('Component', () => {
  describe('Menu', () => {
    it('should render', () => {
      const { enzymeWrapper, onLogoutClick, onMenuVisibleToggle } = setup()
      const menuWrapper = enzymeWrapper.find('MenuComponent')

      expect(menuWrapper.find('li').length).toBe(5)
      menuWrapper.find('#menu-toggler').simulate('click')
      expect(onMenuVisibleToggle.called).toBe(true)
      menuWrapper.find('#logout-button').simulate('click')
      expect(onLogoutClick.called).toBe(true)
      
    })
  })
})
