import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li key={task.id} className={`tasks__item ${
          task.done && hideDoneTasks ? "tasks__item--hidden" : ""
        }`}
      >
        <button className="task__button task__buttonToggleDone">
          {task.done ? "✓" : " "}
        </button>
        <li
          key={task.id}
          className={`tasks__content ${
            task.done && hideDoneTasks ? "tasks__item--hidden" : ""
          }`}
        >
          <span className={`tasks__content {task.done ? "task--done" : ""}`}>
            {task.content}
          </span>
        </li>
        <button className="task__button task__binButton">️🗑️</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
