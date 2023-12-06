import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import CounterProvider from "./contexts/CounterContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoProvider from "./contexts/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <ThemeContextProvider>
      <TodoProvider>
        <Routes />
      </TodoProvider>
    </ThemeContextProvider>
  </CounterProvider>
);
