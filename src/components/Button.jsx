import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ color, text, onClick, btnControl }) => {

	return (
		<button onClick={onClick} className='btn' style={{ background: btnControl ? color : '' }}>
			{text}
		</button>
	);
}

Button.defaultProps = {
	color: 'steelblue'
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string
}

export default Button
