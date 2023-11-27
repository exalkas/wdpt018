import { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(3);

  // useEffect(callback function, dependency array)
  //   array empty = runs ONLY the FIRST time the component will render
  // no array = runs after EVERY RENDER
  //   when there is a variable = runs only when this variable changes
  useEffect(() => {
    console.log("🚀 ~ useEffect FIRST TIME ONLY");
  }, []);

  useEffect(() => {
    console.log("🚀 ~ useEffect RUNS at EVERY render");
  });

  useEffect(() => {
    console.log("🚀 ~ useEffect RUNS when COUNTER CHANGES");
  }, [counter]);
  useEffect(() => {
    console.log("🚀 ~ useEffect RUNS when secondCounter CHANGES");
  }, [secondCounter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  console.log("🚀 ~ Component Renders");
  return (
    <div>
      Counter: {counter} <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;

// this is an impure function
const vat = 0.24;

function calcPrice(price) {
  console.log("The total price is", price * vat);
}
calcPrice(10);

// PURE FUNCTION
function calcPricePure(price, vat) {
  console.log("PURE: The total price is", price * vat);
}
calcPricePure(10, 0.19);
