import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
	
	const iconStyle = {
		color: '#ff0000',
		cursor: 'pointer'
	}

	return (
		<div className='task'>
			<h3>
				{task.text} <FaTimes style={iconStyle} onClick={()=>onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
}

export default Task
