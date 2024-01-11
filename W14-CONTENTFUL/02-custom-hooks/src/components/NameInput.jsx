import { memo } from "react";

export default memo(function NameInput({ value, onChange }) {
  console.log("Name runs");
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type your name"
    />
  );
});
