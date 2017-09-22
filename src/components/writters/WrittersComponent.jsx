import React from 'react'
import PropTypes from 'prop-types'
import Jumbotron from '../../lib/ui/Jumbotron.jsx'
import PersonsComponent from '../persons/PersonsComponent'

const WrittersComponent = ({writters, onWritterPropChange, errorMessage}) => (
    <div>
      <Jumbotron backgroundColor="blue" text="Writters"/>
      <article>
	<h1>{errorMessage}</h1>
        <PersonsComponent
            persons={writters}
            onPersonPropChange={onWritterPropChange}
          />
      </article>
    </div>
)

WrittersComponent.propTypes = {
    writters: PropTypes.arrayOf(PropTypes.shape({
	fullname: PropTypes.string,
	profilePicUrl: PropTypes.string
    }))
}

WrittersComponent.propTypes = {
    writters: PropTypes.arrayOf(PropTypes.shape({
        fullname: PropTypes.string,
        profilePicUrl: PropTypes.string
    })),
    onWritterPropChange: PropTypes.func,
    errorMessage: PropTypes.string
}

export default WrittersComponent
