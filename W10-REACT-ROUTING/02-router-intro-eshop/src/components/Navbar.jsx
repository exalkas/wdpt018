import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}
