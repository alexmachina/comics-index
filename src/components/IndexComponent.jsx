import React from 'react'
import MenuContainer from '../containers/MenuContainer.jsx'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { brand, menuItems } from '../routes.js'

const IndexComponent = ({children}) => (
  <div>
    <MenuContainer 
      brand={brand}
      items={menuItems}
    />
    {children}
  </div>
  )

export default IndexComponent
