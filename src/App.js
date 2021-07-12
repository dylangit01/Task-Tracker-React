import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
  const endpoint = 'http://localhost:5000/tasks';
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
  
  // Delete task, here we only use fake json server to delete the data, so using fetch API to write the "delete" request, it has the second parameter, add method: 'DELETE', but for full stack, we can use Axios to make http request to delete the task from the server;

  const deleteTask = async (id) => {
    await fetch(`${endpoint}/${id}`, {
			method: 'DELETE',
    });
    // Remove UI as well:
    setTasks(tasks.filter(task => task.id !== id))
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
