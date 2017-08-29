import React from 'react'
import propTypes from 'prop-types'
import menu from '../propTypes.js'
import { Link } from 'react-router-dom'

const MenuComponent = ({brand, items, visible, onMenuVisibleToggle}) => {
  return(
  <nav id="navbar">
    <div id="brand">
      <a href={brand.link}>{brand.text}</a>
    </div>
    <div id="hamburger" onClick={onMenuVisibleToggle}>
      <i className="fa fa-bars"></i>
    </div>
    <div id="menu" style={{display: visible ? 'initial' : 'none'}}>
      <ul>
        {items.map(item =>
          <li>
            <a href={item.link}>
              {item.text}
            </a>
          </li>
        )}
      </ul>
    </div>
  </nav>
)}

MenuComponent.propTypes = menu


export default MenuComponent
