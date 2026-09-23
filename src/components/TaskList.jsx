import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <section className="empty-state">
        <h2>No tasks found</h2>
        <p>Add a task or change the filter to see your tasks.</p>
      </section>
    );
  }

  return (
    <section className="task-list">
      <h2>Your Tasks</h2>

      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;


