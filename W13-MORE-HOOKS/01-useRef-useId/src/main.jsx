import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import CounterProvider from "./contexts/CounterContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoProvider from "./contexts/TodoProvider";
import CartProvider from "./contexts/CartContext";
import EditorProvider from "./contexts/EditorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <ThemeContextProvider>
      <TodoProvider>
        <CartProvider>
          <EditorProvider>
            <Routes />
          </EditorProvider>
        </CartProvider>
      </TodoProvider>
    </ThemeContextProvider>
  </CounterProvider>
);
