import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	const createTask = (taskTitle, taskDescrition) => {
		setTasks([
			...tasks,
			{
				title: taskTitle,
				id: tasks.length,
				description: taskDescrition,
			},
		]);
	};

	const deleteTask = taskId => {
		setTasks(tasks.filter(task => task.id !== taskId));
	};

	return (
		<TaskContext.Provider
			value={{
				tasks,
				deleteTask,
				createTask
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
