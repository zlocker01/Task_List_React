import { useContext } from "react";
import { TaskCard } from "../components/TaskCard";
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No Hay Tareas Aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
