import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskStats from "./components/TaskStats";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        ...task,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedTask }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="container">
        <TaskStats tasks={tasks} />

        <TaskForm onAddTask={addTask} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </main>
    </div>
  );
}

export default App;
