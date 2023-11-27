import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);

  useEffect(() => {
    console.log("useEffect is running");
    let interval;
    if (start === true) {
      interval = setInterval(() => setTime((prev) => prev + 500), 500);
    }

    return () => {
      console.log("CLEARING runs");
      clearInterval(interval);
    };
  }, [start]);

  return (
    <div>
      <h1>Timer</h1>
      <p>{time}</p>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
      </div>
    </div>
  );
}
