import React from "react";
import "./menu.css";
export default function Menu() {
  return (
    <>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <li>Home</li>
        <li>Categories</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <span>Welcome</span>
    </>
  );
}
