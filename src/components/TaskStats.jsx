import "./TaskStats.css";

function TaskStats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <section className="stats">
      <div className="stat-card">
        <h3>{totalTasks}</h3>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <h3>{remainingTasks}</h3>
        <p>Remaining</p>
      </div>

      <div className="stat-card">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
      </div>
    </section>
  );
}

export default TaskStats;
