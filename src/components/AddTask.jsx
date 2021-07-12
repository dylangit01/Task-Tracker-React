import React, { useState } from 'react'

const AddTask = ({onAddTask}) => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)

	const submitForm = (e) => {
		e.preventDefault();

		if (!text) {
			alert('Please add a task!')
			return;
		}
		const newTask = {
			// No need id as json-server will create it automatically
			// id: Math.floor((1 + Math.random()) * 10000),
			text,
			day,
			reminder
		};
		onAddTask(newTask)
		cleanForm()
	}

	const cleanForm = () => {
		setText('');
		setDay('');
		setReminder(false)
	}

	return (
		<form className='add-form' onSubmit={(e)=> submitForm(e)}>
			<div className='form-control'>
				<label htmlFor=''>Task</label>
				<input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
			</div>

			<div className='form-control'>
				<label htmlFor=''>Day & Time</label>
				<input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
			</div>

			<div className='form-control form-control-check'>
				<label htmlFor=''>Set Reminder</label>
				<input type='checkbox' checked={reminder} value={reminder} onChange={e=> setReminder(e.currentTarget.checked)} />
			</div>

			<input className='btn btn-block' type='submit' value='Save Task' />
		</form>
	);
}

export default AddTask
