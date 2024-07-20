import React from "react";

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      <div>
        <div>{todo.text}</div>
        <div className="timestamp">{formatDate(todo.timestamp)}</div>
      </div>
      <div>
        <button onClick={() => completeTodo(index)}>Done</button>
        <button className="remove" onClick={() => removeTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
