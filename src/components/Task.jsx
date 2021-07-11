import {FaTimes} from 'react-icons/fa'

const Task = ({ task }) => {
	
	const iconStyle = {
		color: '#ff0000',
		cursor: 'pointer'
	}

	return (
		<div className='task'>
			<h3>{task.text} <FaTimes style={iconStyle} /> </h3>
			<p>{task.day}</p>
		</div>
	)
}

export default Task
