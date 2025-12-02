import React, { useState } from "react";


export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter a task.");
      return;
    }
    addTodo(text, time);
    setText("");
    setTime("");
  }

  return (
    <form onSubmit={submit} style={{ width: "100%" }}>
      <div className="input-row">
        <input
          type="text"
          placeholder="What do you want to do?"
          value={text}
          onChange={e => setText(e.target.value)}
          aria-label="task text"
        />

        <input
          type="time"
          placeholder="HH:MM"
          value={time}
          onChange={e => setTime(e.target.value)}
          aria-label="task time"
          style={{ width: 140 }}
        />

        <button type="submit" className="btn btn-add">Add Task</button>
      </div>
    </form>
  );
}
