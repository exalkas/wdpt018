import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function TitleLayout() {
  return (
    <div style={{ background: "blue", color: "white" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}
