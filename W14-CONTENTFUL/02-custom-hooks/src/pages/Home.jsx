import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useCounter from "../hooks/useCounter";

function App() {
  const { counter, handleIncrease, handleDecrease, handleReset } = useCounter();

  return (
    <HelmetProvider>
      <Helmet>
        <title>This is home page</title>
      </Helmet>
      <div>
        Counter: {counter}
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </HelmetProvider>
  );
}

export default App;
