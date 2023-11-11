import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

export function App() {
  return (
    <main className="bg-zinc-900 h-screen p-5">
      <div className="container mx-auto px-5">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
