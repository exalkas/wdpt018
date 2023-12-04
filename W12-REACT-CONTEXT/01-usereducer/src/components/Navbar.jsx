import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <div className="flex gap-[20px] items-center justify-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <Toggle />
    </div>
  );
}
