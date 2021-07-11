import React, { useState } from 'react';

const Tasks = () => {
	// const [tasks, setTasks] = useState([]);
	const tasks = [
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
	];

	return (
		<>
			{tasks.map((task, idx) => (
				<h3 key={idx}>{task.text}</h3>
			))}
		</>
	);
};

export default Tasks;
