import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
      <h1 className="text-2xl text-white font-bold mb-3">Crea Tu Tarea</h1>
      <input
      className="bg-slate-300 p-3 w-full mb-2"
        type="text"
        placeholder="Nombre de la Tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        />
      <textarea
      className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Describe tu Tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        ></textarea>
      <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 text-white'>Guardar</button>
    </form>
  </div>
  );
}
