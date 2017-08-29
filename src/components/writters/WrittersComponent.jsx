import React from 'react'
import PropTypes from 'prop-types'
import PersonsViewContainer from '../containers/persons/PersonsViewContainer'

const WrittersComponent = ({writters}) => (
    <div>
      <header class="jumbotron">
	<h1>Writters</h1>
      </header>
      <article>
	<PersonsViewContainer persons={writters} />
      </article>
    </div>
)

WrittersComponent.propTypes = {
    writters: PropTypes.arrayOf(PropTypes.shape({
	fullname: PropTypes.string,
	profilePicUrl: PropTypes.string }))
}

export default WrittersComponent



