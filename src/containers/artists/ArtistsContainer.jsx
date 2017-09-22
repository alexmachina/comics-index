import React from 'react'
import { connect } from 'react-redux'
import ArtistsComponent from '../../components/artists/ArtistsComponent'
import { set_artist_prop } from '../../actions/artists'

const mapStateToProps = state => {
    const artists = state.data.artistsDomain.artists
    console.log(state)
    return {
        artists
    }
},
      mapDispatchToProps = dispatch => {
          return {
              onArtistPropChange: (prop, value) =>
                  dispatch(set_artist_prop(prop, value))
          }
      },
      ArtistsContainer = connect(mapStateToProps,
                                 mapDispatchToProps)(ArtistsComponent)

export default ArtistsContainer
