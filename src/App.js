import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks)
    }
    getTasks();
  }, [])

  // Fetch tasks, below fun can be written in useEffect, however, in order to reuse it, so put it outside of useEffect(), and use getTasks to fetch and reuse it:
  const fetchTasks = async () => {
		const endpoint = 'http://localhost:5000/tasks';
		const res = await fetch(endpoint);
		const data = await res.json();
		return data;
	};
  
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
