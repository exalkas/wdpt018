import { useState } from "react";
export default function useCounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => setCounter(counter + 1);
  const handleDecrease = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  return { counter, handleIncrease, handleDecrease, handleReset };
}
