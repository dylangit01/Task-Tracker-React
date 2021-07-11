import React, { useState } from 'react';

const Tasks = () => {
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

	return (
		<>
			{tasks.map((task) => (
				<h3 key={task.id}>{task.text}</h3>
			))}
		</>
	);
};

export default Tasks;
