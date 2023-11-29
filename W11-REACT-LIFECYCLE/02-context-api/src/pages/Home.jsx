import { useContext } from "react";
import "../App.css";
import { CounterContext } from "../contexts/CounterContext";
import { ThemeContext } from "../contexts/ThemeContext";

function App() {
  const { counter, setCounter } = useContext(CounterContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      Counter: {counter}{" "}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default App;

// function Parent({ children }) {
//   console.log("🚀 ~ props:", children);
//   return <div>This is parent and these are the children: {children}</div>;
// }
// function Child() {
//   return <div>This is child</div>;
// }
