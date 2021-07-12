import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
	const [tasks, setTasks] = useState([]);
  
  // Toggle <AddTask/>
  const [showAdd, setShowAdd] = useState(false)
  const toggleShowAddTask = () => {
    setShowAdd(!showAdd)
  }
  
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
			<Header onToggle={toggleShowAddTask} title='Tracking Tasks'/>
			{showAdd && <AddTask onAddTask={addTask} />}
			{tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <h2>No Task</h2>}
		</div>
	);
}

export default App;
