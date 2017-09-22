import React from 'react'
import HomeComponent from '../components/HomeComponent.jsx'
import { connect } from 'react-redux'

const HomeContainer = connect()(HomeComponent)

export default HomeContainer
