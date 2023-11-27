import { useEffect, useState } from "react";

export default function Localstorage() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("ourtodos")) || []
  );
  console.log("🚀 ~ todos:", todos);

  const handleAdd = () => setTodos([...todos, text]);

  useEffect(() => {
    localStorage.setItem("ourtodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <hr />
      <ul>
        {todos.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </ul>
    </div>
  );
}
