/**
 * 07 - Weather App
 *
 * Objective: Create a simple weather app that fetches weather information based on a user-inputted city and displays it.
 *
 * Instructions:
 *
 * Use an API like OpenWeatherMap or any other of your choice to fetch weather information.
 * Set up state to keep track of the city the user inputs and the weather data returned from the API.
 * Use useEffect to fetch the weather information whenever the city changes.
 * Display the fetched weather information, such as temperature, weather condition (e.g., sunny, rainy), and so on.
 * Handle potential errors, such as if the city is not found or the API request fails.
 * Optional: Implement a loading state to indicate to users that the data is being fetched.
 */

import { useEffect, useState } from "react";

export default function Weather() {
  const API = "";

  const [city, setCity] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
      );

      const data = await response.json();
      console.log("🚀 ~ data:", data);
    };

    if (city.length > 2) getData();
  }, [clicked]);

  return (
    <div>
      <h3>Weather</h3>
      <input
        placeholder="enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => setClicked(!clicked)}>Submit</button>
    </div>
  );
}
