import "./TaskForm.css";
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask({
      title: title.trim(),
      category,
    });

    setTitle("");
    setCategory("Personal");
  };

  return (
    <section className="task-form-section">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <label htmlFor="task-title">Task title</label>

        <input
          id="task-title"
          type="text"
          placeholder="Enter your task..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="task-category">Category</label>

        <select
          id="task-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Urgent">Urgent</option>
        </select>

        <button type="submit">+ Add Task</button>
      </form>
    </section>
  );
}

export default TaskForm;
