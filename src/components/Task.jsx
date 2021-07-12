import {FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
	
	const iconStyle = {
		color: '#ff0000',
		cursor: 'pointer'
	}

	return (
		<div className={task.reminder? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text} <FaTimes style={iconStyle} onClick={()=>onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
}

export default Task
