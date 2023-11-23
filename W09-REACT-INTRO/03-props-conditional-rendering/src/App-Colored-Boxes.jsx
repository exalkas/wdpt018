import "./App.css";
import ColorBoxesProps from "./components/ColorBoxesProps";
/**
 * 04 Displaying a List of Colored Boxes
 *
 * Create a new functional component called "ColorBoxes" in a file named "ColorBoxes.js".
 * Inside the component, create a static array of color values (e.g., "red", "blue", "green",
 * "yellow").
 * Use the "map" function to iterate over the array, rendering a colored <div> for each color
 * value. Set the background color of the <div> to the corresponding color value.
 * Import and use the ColorBoxes component in your "App.js" file.
 *
 */

function App() {
  return (
    <div>
      <ColorBoxesProps />
    </div>
  );
}

export default App;
