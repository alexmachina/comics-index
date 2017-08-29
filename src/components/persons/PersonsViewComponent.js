import React from 'react'
import PropTypes from 'prop-types'

const PersonsViewComponent = ({persons}) => (
	<div class="persons-container">
	{persons.map(person => (
		<div class="person">
		<img src={person.profilePicUrl}
	    className="person-pic" />
		<h3>{person.fullname}</h3>
		</div>
	))}
	</div>
)