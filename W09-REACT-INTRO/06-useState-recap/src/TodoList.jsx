/**
 * 03 Todo List
 * Create a todo list application that allows users to add and remove tasks.
 * Use the useState hook to manage the list of tasks.
 * Ensure that the list renders correctly as tasks are added and removed.
 *
 */

import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", task);

    setTodos([task, ...todos]);
  };

  const handleRemove = (index) => {
    console.log("🚀 ~ handleRemove:", index);

    const result = todos.filter((item, idx) => idx !== index);

    setTodos(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="type your task"
        />
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemove(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
