import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div
    // style={{ background: "white", color: "red" }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
