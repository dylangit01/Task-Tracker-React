import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
	return (
		<header>
			<h1>Task Tracker</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker'
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}


export default Header
