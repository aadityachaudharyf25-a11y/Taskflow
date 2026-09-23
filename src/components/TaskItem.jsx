import "./TaskItem.css";
import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editCategory, setEditCategory] = useState(task.category);

  const handleSave = () => {
    if (!editTitle.trim()) {
      return;
    }

    onEdit(task.id, {
      title: editTitle.trim(),
      category: editCategory,
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditCategory(task.category);
    setIsEditing(false);
  };

  return (
    <article className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-left">
        <button
          className="check-button"
          onClick={() => onToggle(task.id)}
          aria-label={`Mark ${task.title} as ${
            task.completed ? "active" : "completed"
          }`}
        >
          {task.completed ? "✓" : "○"}
        </button>

        <div className="task-content">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(event) => setEditTitle(event.target.value)}
              />

              <select
                value={editCategory}
                onChange={(event) => setEditCategory(event.target.value)}
              >
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Urgent">Urgent</option>
              </select>
            </>
          ) : (
            <>
              <h3>{task.title}</h3>
              <span className="category">{task.category}</span>
            </>
          )}
        </div>
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              className="edit-button"
              onClick={handleSave}
              aria-label={`Save changes to ${task.title}`}
            >
              Save
            </button>

            <button
              className="delete-button"
              onClick={handleCancel}
              aria-label={`Cancel editing ${task.title}`}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="edit-button"
              onClick={() => setIsEditing(true)}
              aria-label={`Edit ${task.title}`}
            >
              Edit
            </button>

            <button
              className="delete-button"
              onClick={() => onDelete(task.id)}
              aria-label={`Delete ${task.title}`}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export default TaskItem;
