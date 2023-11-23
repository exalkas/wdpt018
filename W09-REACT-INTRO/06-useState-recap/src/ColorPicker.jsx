/**
 * 04 Color Picker
 * Create a color picker application that allows users to select a color from a list of predefined colors.
 * Use the useState hook to manage the selected color.
 * Display the selected color in a visual element on the page.
 *
 */

import { useState } from "react";

export default function ColorPicker() {
  const colors = ["white", "red", "yellow", "green"];

  const [selection, setSelection] = useState(colors[0]);

  const handleChange = (e) => {
    console.log("handle change", e.target.value);
    setSelection(e.target.value);
  };

  return (
    <div>
      <select value={selection} onChange={handleChange}>
        {colors.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: selection,
        }}
      ></div>
    </div>
  );
}
