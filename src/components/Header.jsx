import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onToggle }) => {
	const [btnControl, setBtnControl] = useState(true);

	const onChangeColor = () => {
		setBtnControl(!btnControl);
		console.log('click');
	};

	

	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button
				onClick={() => {
					onChangeColor();
					onToggle();
				}}
				btnControl={btnControl}
				color='green'
				text={btnControl ? 'Add Task' : 'Close'}
			/>
			{/* <Button text ='Hello'/> */}
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker'
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}


export default Header
