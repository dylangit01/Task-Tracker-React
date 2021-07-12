import React from 'react'

const AddTask = () => {

	const submitForm = () => {
		
	}

	return (
		<form className='add-form' onSubmit={submitForm}>
			<div className='form-control'>
				<label htmlFor=''>Task</label>
				<input type='text' placeholder='Add Task' value='' onChange={() => console.log()} />
			</div>

			<div className='form-control'>
				<label htmlFor=''>Day & Time</label>
				<input type='text' placeholder='Add Day & Time' value='' onChange={() => console.log()} />
			</div>

			<div className='form-control form-control-check'>
				<label htmlFor=''>Set Reminder</label>
				<input type='checkbox' value='' onChange={() => console.log()} />
			</div>

			<input className='btn btn-block' type='submit' value='Save Task' />
		</form>
	);
}

export default AddTask
