import React from "react";

export default function TodoItem({ todo, onDone, onUndo, onDelete }) {
  return (
    <div className={`todo-item ${todo.done ? "completed" : ""}`}>
      <div className="todo-left">
        <div className="todo-text">{todo.text}</div>
        <div className="todo-meta">
          {todo.time ? `${todo.time} • ` : ""}
          {new Date(todo.createdAt).toLocaleString()}
        </div>
      </div>

      <div className="todo-actions">
        {!todo.done ? (
          <button className="btn btn-add" onClick={onDone}>Done</button>
        ) : (
          <button className="btn btn-neutral" onClick={onUndo}>Undo</button>
        )}

        <button className="btn btn-delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
