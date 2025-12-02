import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos = [], onDone, onDelete, onUndo }) {
  if (!todos || todos.length === 0) {
    return <div style={{ color: "#6b7280", marginTop: 8 }}>No tasks here.</div>;
  }

  return (
    <div style={{ marginTop: 8 }}>
      {todos.map(t => (
        <TodoItem
          key={t.id}
          todo={t}
          onDone={() => onDone && onDone(t.id)}
          onUndo={() => onUndo && onUndo(t.id)}
          onDelete={() => onDelete && onDelete(t.id)}
        />
      ))}
    </div>
  );
}
