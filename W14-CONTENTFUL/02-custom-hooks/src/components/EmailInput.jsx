import { memo } from "react";

export default memo(function EmailInput({ value, onChange }) {
  console.log("Email runs");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type your email"
      />
    </div>
  );
});
