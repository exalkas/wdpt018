import { useReducer, useState } from "react";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [counter, setCounter] = useState(0);

  const reducer = (currentState, action) => {
    console.log("🚀 ~ currentState:", currentState);
    console.log("🚀 ~ action:", action);

    switch (action.type) {
      case "INCREASE":
        return currentState + 1; // THIS IS THE NEW STATE
      case "DECREASE":
        return currentState - 1; // THIS IS THE NEW STATE
      case "RESET":
        return 0; // THIS IS THE NEW STATE
      case "DOUBLE":
        return currentState * 2; // THIS IS THE NEW STATE
      default:
        currentState;
    }
  };

  // useReducer(function reducer (that is the function to handle the state), initial state)
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <HelmetProvider>
      <Helmet>
        <title>This is home page</title>
      </Helmet>
      <div>
        Counter: {state}{" "}
        <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "DOUBLE" })}>Double</button>
      </div>
    </HelmetProvider>
  );
}

export default App;
