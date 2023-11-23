import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("🚀 ~ handleSubmit:", item);
    // todos.push(item);

    // const array = [...todos];

    // array.push(item);

    // setTodos(array);

    setTodos([...todos, item]);
    // [1, 13]
    // [1, 13, 135]
  };

  console.log("🚀 ~ todos:", todos);
  console.log("🚀 ~ todos:", ...[1, 2, 3, 4]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        <h3>list here</h3>
        {todos.map((element, idx) => (
          <div key={idx}>{element}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
