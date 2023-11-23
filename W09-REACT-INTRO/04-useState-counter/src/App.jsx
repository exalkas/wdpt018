import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const [dark, setDark] = useState(true);
  // console.log("🚀 ~ demo:", demo);

  // let counter = 0;

  const handleIncrease = () => {
    setCounter(counter + 1); // works ASYNCHRONOUSLY
    console.log("🚀 ~ counter:", counter);
  };
  const handleDecrease = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  const handleChange = () => setDark(!dark);

  console.log("🚀 ~ Component runs Counter:", counter, dark);
  return (
    <div
      style={{
        background: dark === true ? "black" : "white",
        color: dark === true ? "white" : "black",
      }}
    >
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <input type="checkbox" value={dark} onChange={handleChange} />{" "}
      {dark ? "Dark" : "Light"}
    </div>
  );
}

export default App;
