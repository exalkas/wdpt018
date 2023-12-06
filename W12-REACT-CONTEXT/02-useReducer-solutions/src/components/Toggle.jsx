import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      // onClick={() => {
      //   console.log("label clicked");
      //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
      // }}
    >
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        onClick={() => {
          console.log("label clicked");
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      ></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle to {theme === "light" ? "dark" : "light"}
      </span>
    </label>
  );
}
