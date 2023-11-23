import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Logo />
      <Menu />
    </div>
  );
}
