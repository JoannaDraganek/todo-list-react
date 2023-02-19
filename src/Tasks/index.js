import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li key={task.id} className={`tasks__item ${
          task.done && hideDone ? "tasks__item--hidden" : ""
        }`}
      >
        <button className="task__button task__buttonToggleDone">
          {task.done ? "✓" : " "}
        </button>
        <li
          key={task.id}
          className={`tasks__content ${
            task.done && hideDone ? "tasks__item--hidden" : ""
          }`}
        >
          <span className={`tasks__content {task.done ? "task--done" : ""}`}>
            {task.content}
          </span>
        </li>
        <button 
        onClick = {() => removeTask(task.id)}        
        className="task__button task__binButton">️
        🗑️
        </button>
      </li> 
    ))}
  </ul>
);

export default Tasks;
