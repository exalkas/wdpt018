import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-[20px] items-center justify-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/title">Title</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </div>
  );
}
