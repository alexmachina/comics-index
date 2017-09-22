import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Jumbo = styled.header`
    @media screen and (min-width:280px) {
        background-color: ${props => props.backgroundColor};
        height:150px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-size:22px;
    }
`
const Jumbotron = ({text, backgroundColor}) => (
    <Jumbo backgroundColor={backgroundColor}>
        {text}
    </Jumbo>

)

Jumbotron.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default Jumbotron
