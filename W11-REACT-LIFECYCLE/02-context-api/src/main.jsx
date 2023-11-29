import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import CounterProvider from "./contexts/CounterContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <ThemeContextProvider>
      <Navbar />
      <Home />
    </ThemeContextProvider>
  </CounterProvider>
);
