import { createContext, useState } from "react";

export const CounterContext = createContext();
console.log("🚀 ~ CounterContext:", CounterContext);

export default function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
