import Menu from "./Menu.jsx";
import Logo from "../assets/react.svg";
export default function Navbar() {
  return (
    <nav className="flex">
      <Menu />
      <img src={Logo} />
    </nav>
  );
}
