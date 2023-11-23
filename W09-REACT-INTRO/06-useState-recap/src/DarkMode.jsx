import { useState } from "react";

/**
 * 05 Dark Mode Toggle
 *
 * Create a simple application with a dark mode toggle button.
 * Use the useState hook to manage the dark mode state. When the user toggles the button,
 * the background color and text color of the application should switch between light and dark themes.
 *
 */
export default function DarkMode() {
  const [theme, setTheme] = useState("dark");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Switch theme to {theme === "dark" ? "Light" : "Dark"}
      <input
        // value={theme}
        checked={theme === "dark" ? true : false}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        type="checkbox"
      />
    </div>
  );
}
