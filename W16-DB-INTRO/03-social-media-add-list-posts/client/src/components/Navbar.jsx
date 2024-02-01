import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-500 w-[100%] top-0 z-50 left-0 flex flex-wrap items-center justify-center p-4 gap-[20px] ">
      <Link to="/" className="text-white">
        Login
      </Link>
      <Link to="/register" className="text-white">
        Register
      </Link>
      <Link to="/home" className="text-white">
        Home
      </Link>
      <Link to="/addPost" className="text-white">
        Add post
      </Link>
    </nav>
  );
}
