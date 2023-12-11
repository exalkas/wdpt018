import { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    document.title = "The counter is " + counter;
  }, [counter]);

  return (
    <div>
      <h3>Title Page</h3>
      Counter: {counter} <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
