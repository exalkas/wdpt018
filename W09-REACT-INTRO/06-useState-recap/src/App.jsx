import { useState } from "react";
import "./App.css";

/**
 * 01 Basic Counter
 *
 * Create a simple counter application that has two buttons:
 * one to increment and another to decrement the count.
 * Use the useState hook to manage the count state.
 *
 */

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      Quantity: {counter}
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default App;
