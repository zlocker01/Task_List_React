import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskCard = ({ task }) => {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className='bg-gray-800 text-white'>
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<button
				onClick={() => {
					deleteTask(task.id);
				}}
			>
				Eliminar
			</button>
		</div>
	);
};
