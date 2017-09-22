import React from 'react'
import PersonsComponent from '../persons/PersonsComponent'
import Jumbotron from '../../lib/ui/Jumbotron'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ArtistsBox = styled.div`
    @media screen and (min-width:280px) {
        display:flex;
        flex-direction: column;
    }
`
const ArtistsComponent = ({artists, onArtistPropChange}) => (
    <ArtistsBox>
        <Jumbotron
            backgroundColor="#7dcc6e"
            text="Artists" />
        <PersonsComponent
            className="persons-component"
            persons={artists}
            onPersonPropChange={onArtistPropChange}
        />
    </ArtistsBox>
)

ArtistsComponent.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape({
        fullname: PropTypes.string,
        profilePicUrl: PropTypes.string
    })),
    onArtistPropChange: PropTypes.func

}

export default ArtistsComponent
