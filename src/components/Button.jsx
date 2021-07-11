import React, {useState} from 'react'
import PropTypes from 'prop-types'


const Button = ({ color, text }) => {
	const [btnControl, setBtnControl] = useState(true)

	const onChangeColor = () => {
		setBtnControl(!btnControl)
	}

	return (
		<button onClick={onChangeColor} className='btn' style={{background:btnControl ? color : ''}}>{text}</button>
	)
}

Button.defaultProps = {
	color: 'steelblue'
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string
}

export default Button
