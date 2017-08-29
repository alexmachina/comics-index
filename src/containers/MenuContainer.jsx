import MenuComponent from '../components/MenuComponent.jsx'
import menu from '../propTypes.js'
import React from 'react'
import { connect } from 'react-redux'
import { toggle_menu_visible } from '../actions/ui.js'


const mapStateToProps = (state, ownProps) => {
    const menu = state.ui.menu
    return {
	visible: menu.visible,
	items: ownProps.items,
	brand: ownProps.brand
	
    }
}

let  mapDispatchToProps = (dispatch, ownProps) => {
    return {
	onMenuVisibleToggle: e => { dispatch(toggle_menu_visible()) }
    }
}

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(MenuComponent)

export default MenuContainer


