import React, { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("apptodo_tasks");
      if (raw) setTodos(JSON.parse(raw));
    } catch (e) {
      console.warn("Could not load tasks", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("apptodo_tasks", JSON.stringify(todos));
    } catch (e) {
      console.warn("Could not save tasks", e);
    }
  }, [todos]);

  function addTodo(text, time) {
    const item = {
      id: Date.now(),
      text: text.trim(),
      time: time || null,
      done: false,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [item, ...prev]);
  }

  function markDone(id) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: true } : t)));
  }

  function undoDone(id) {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: false } : t)));
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="main-column">
      <TodoInput addTodo={addTodo} />

      <div className="section">
        <div className="section-title">Pending Tasks</div>
        <TodoList
          todos={todos.filter(t => !t.done)}
          onDone={markDone}
          onDelete={deleteTodo}
          onUndo={undoDone}
        />
      </div>

      <div className="section">
        <div className="section-title">Completed Tasks</div>
        <TodoList
          todos={todos.filter(t => t.done)}
          onDone={markDone}
          onDelete={deleteTodo}
          onUndo={undoDone}
        />
      </div>
    </div>
  );
}
