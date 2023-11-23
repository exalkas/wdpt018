/**
 * 02 Temperature Converter
 *
 * Create a temperature converter that converts Celsius to Fahrenheit and vice versa.
 * Have two input fields, one for Celsius and the other for Fahrenheit.
 * Use the useState hook to manage the temperature values.
 *
 */

import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    console.log("Celsius here");
    const celsius = e.target.value;
    setCelsius(celsius);

    const fahrenheit = celsius * (9 / 5) + 32;

    setFahrenheit(fahrenheit);
    console.log("🚀 ~ fahrenheit:", fahrenheit);
  };
  const handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    setFahrenheit(fahrenheit);
    const celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
    setCelsius(celsius);
    console.log("🚀 ~ celsius:", celsius);
    console.log("Fahrenheit here");
  };
  return (
    <div>
      <input
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Enter Celsius"
      />
      <input
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        placeholder="Enter Fahrenheit"
      />
    </div>
  );
}
