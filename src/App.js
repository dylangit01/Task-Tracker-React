import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

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
  
  // Add task:
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(newTask);
  }
  
  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(task=> task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder : !task.reminder} : task))
  }

	return (
		<div className='container'>
      <Header />
      <AddTask onAddTask= {addTask} />
      {
        tasks.length >0 ? <Tasks tasks = {tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : <h2>No Task</h2>
      }
		</div>
	);
}

export default App;
