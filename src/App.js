import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'A',
			day: 'A',
			reminder: true,
		},
		{
			id: 2,
			text: 'B',
			day: 'B',
			reminder: true,
		},
		{
			id: 3,
			text: 'C',
			day: 'C',
			reminder: false,
		},
  ]);
  
  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(task=> task.id !== id))
  }

	return (
		<div className='container'>
			<Header />
			<Tasks tasks = {tasks} onDelete={deleteTask}/>
		</div>
	);
}

export default App;
