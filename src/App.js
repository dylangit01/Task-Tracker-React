import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

function App() {
	const endpoint = 'http://localhost:5000/tasks';
	const [tasks, setTasks] = useState([]);

	// Toggle <AddTask/>
	const [showAdd, setShowAdd] = useState(false);
	const toggleShowAddTask = () => {
		setShowAdd(!showAdd);
	};

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await fetchTasks();
			setTasks(tasks);
		};
		getTasks();
	}, []);

	// Fetch tasks, below fun can be written in useEffect, however, in order to reuse it, so put it outside of useEffect(), and use getTasks to fetch and reuse it:
	const fetchTasks = async () => {
		const res = await fetch(endpoint);
		const data = await res.json();
		return data;
	};

	// Fetch single Task:
	const fetchSingleTask = async (id) => {
		const res = await fetch(`${endpoint}/${id}`);
		const data = await res.json();
		return data;
	};

	// Toggle reminder
	const toggleReminder = async (id) => {
		// 1st: get the task that needs to be update for the reminder
		// 2nd: update this task:
		// 3rd: update server with this updated task:
		// 4th: get the updated task from server and update UI, don't forget the await from res.json()
		// 5th: change task to updated task with correct reminder (but original way is correct, I think)

		const taskToToggle = await fetchSingleTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
		const res = await fetch(`${endpoint}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updTask),
		});
		const data = await res.json();
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));

		// Original version:
		// setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	// Add task, before using sever, we can just manually add this newTask to the state, however, when connect to server, we have to add the newTask to server first (and remember to JSON.stringify), and fetch it from the server, not just directly fill the form and got it from the form, has to be save it into server and fetch it:
	const addTask = async (newTask) => {
		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(newTask),
		});
		const data = await res.json();
		setTasks([...tasks, data]);

		// setTasks([...tasks, newTask])
	};

	// Delete task, here we only use fake json server to delete the data, so using fetch API to write the "delete" request, it has the second parameter, add method: 'DELETE', but for full stack, we can use Axios to make http request to delete the task from the server;

	const deleteTask = async (id) => {
		await fetch(`${endpoint}/${id}`, {
			method: 'DELETE',
		});
		// Remove UI as well:
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<Router>
			<div className='container'>
				<Header onToggle={toggleShowAddTask} title='Tracking Tasks' />
				{showAdd && <AddTask onAddTask={addTask} />}
				{tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <h2>No Task</h2>}
				<Switch>
					<Route path='/about' component={About} />
					<Footer />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
